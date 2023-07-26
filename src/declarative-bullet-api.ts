import { CustomHttpResponse } from './CustomHttpResponse';
import { BulletAuthentication } from './facade';
import BulletHttpRequestLibrary from './BulletHttpRequestLibrary';
import WrapperFlow, { IWrapperFlow } from './fluent/wrapper-flow';
import { FlowFunctionType } from './fluent/bullet-flow';
import { FluentBulletBase } from './fluent/fluent-bullet-base';

 const DeclarativeBulletApi = function(bulletAuthentication: BulletAuthentication){
    this.bulletAuthentication = bulletAuthentication;

    return {
      ...FluentBulletBase(),
      flow: function(flowBuilder: FlowFunctionType) {
        const flowWrap =  WrapperFlow().load(flowBuilder);
    
        // this.flowInstance = flowWrap;
        this.flowList.push(flowWrap);
    
        return this;
      },

      asJson: function() {
        const response = {
          ...this.asJsonBase(),
        };
    
        const flowListLength = this.flowList.length;
        if (flowListLength) {
          if(flowListLength === 1){
            response.flow = this.flowList[0].asJson();
          } else {
            const jsFlows = [];
            this.flowList.forEach((el: IWrapperFlow)=> jsFlows.push(el.asJson()));
            response.flow = jsFlows;
          }
        }
    
        return response;
      },
      execute: function(handlers?: {
        beforeSendingRequest?: Function;
      }): Promise<CustomHttpResponse> {
        // debugger;
        const request = this.asJson();
    
        if (handlers && handlers.beforeSendingRequest) {
          handlers.beforeSendingRequest(request);
        }
        const bulletHttpInstance = new BulletHttpRequestLibrary(
          this.bulletAuthentication
        );
    
        if (!this.storageInstance) {
          return bulletHttpInstance.sendBulletApiRequest(request);
        }
        return bulletHttpInstance.sendBulletFilesApiRequest(
          request,
          this.storageInstance.files
        );
      }
    }
}

export default DeclarativeBulletApi;
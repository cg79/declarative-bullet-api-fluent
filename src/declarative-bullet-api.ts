import { CustomHttpResponse } from './CustomHttpResponse';
import { BulletAuthentication } from './facade';
import FluentBulletBase from './fluent/fluent-bullet-base';
import BulletHttpRequestLibrary from './BulletHttpRequestLibrary';
import WrapperFlow from './fluent/wrapper-flow';
import { FlowFunctionType } from './fluent/bullet-flow';

class DeclarativeBulletApi extends FluentBulletBase {
  private bulletAuthentication: BulletAuthentication;

  constructor(bulletAuthentication: BulletAuthentication) {
    super();
    this.bulletAuthentication = bulletAuthentication;
    // this.bulletAuthentication = {
    //   ...bulletAuthentication,
    //   serverUrl: `${bulletAuthentication.serverUrl}${BULLET_ROUTE}`,
    // };
  }

  protected flowList = [];
  flow(flowBuilder: FlowFunctionType) {
    const flowWrap = new WrapperFlow();
    flowBuilder(flowWrap);

    // this.flowInstance = flowWrap;
    this.flowList.push(flowWrap);

    return this;
  }

  asJson() {
    const response = {
      ...this.asJsonBase(),
    };

    const flowListLength = this.flowList.length;
    if (flowListLength) {
      if(flowListLength === 1){
        response.flow = this.flowList[0].asJson();
      } else {
        const jsFlows = [];
        this.flowList.forEach((el: WrapperFlow)=> jsFlows.push(el.asJson()));
        response.flow = jsFlows;
      }
    }

    return response;
  }

  execute(handlers?: {
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

export default DeclarativeBulletApi;

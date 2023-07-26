import BulletFlowApi, { FlowFunctionType, IBulletFlowApi } from "./bullet-flow";

export interface IWrapperFlow {
  __proto__: IBulletFlowApi;
  specificFlowPropsAsJson: () => any;

  asJson: () => any;
  load: (builder: FlowFunctionType) => IWrapperFlow;
}

const WrapperFlow = function (): IWrapperFlow {
  return {
    __proto__: BulletFlowApi(),
    specificFlowPropsAsJson: function () {
      const request = {};

      if (this.wrapperStopIf) {
        const cond = this.wrapperStopIf.asJson();
        if (cond) {
          request["stopIf"] = cond;
        }
      }

      if (this.wrapperExecuteIf) {
        const cond = this.wrapperExecuteIf.asJson();
        if (cond) {
          request["executeIf"] = cond;
        }
      }
      return request;
    },
    asJson() {
      const response: any = {
        ...this.specificFlowPropsAsJson(),
        ...this.asJsonBase(),
      };

      const flowListLength = this.flowList.length;
      if (flowListLength) {
        if (flowListLength === 1) {
          response.flow = this.flowList[0].asJson();
        } else {
          const jsFlows = [];
          this.flowList.forEach((el: IWrapperFlow) =>
            jsFlows.push(el.asJson())
          );
          response.flow = jsFlows;
        }
      }

      return response;
    },
    load: function (builder: FlowFunctionType): IWrapperFlow {
      builder(this);
      debugger;

      return this;
    },
  };
};

export default WrapperFlow;

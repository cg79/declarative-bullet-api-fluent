import WrapperFlow, { IWrapperFlow } from "./wrapper-flow";
import {
  FluentBulletBase,
} from "./fluent-bullet-base";
import { IBulletFlowApi, FlowFunctionType } from "./facade";



const BulletFlowApi = function (): IBulletFlowApi {
  return {
    ...FluentBulletBase(),
    
    flow: function (flowBuilder: FlowFunctionType) {
      const flowWrap = WrapperFlow().load(flowBuilder);
      this.flowList.push(flowWrap);

      return this;
    },
  };
};

export default BulletFlowApi;

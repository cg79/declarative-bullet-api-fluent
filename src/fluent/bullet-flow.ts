import FluentBulletBase, {
  ConditionFieldType,
} from './fluent-bullet-base';
import { IWrapperFlow } from './i-wrapper-flow';
import WrapperFlow from './wrapper-flow';
import { WrapperFlowBuilder } from './wrapper-flow-builder';
import WrapperStopIf from './wrapper-stop-if';

export type FlowFunctionType = (x: BulletFlowApi) => BulletFlowApi;

class BulletFlowApi extends FluentBulletBase {
  protected wrapperStopIf: WrapperStopIf;
  stopIf(builder: ConditionFieldType) {
    const instance = new WrapperStopIf();
    builder(instance);

    this.wrapperStopIf = instance;
    return this;
  }

  protected wrapperExecuteIf: WrapperStopIf;
  executeIf(builder: ConditionFieldType) {
    const instance = new WrapperStopIf();
    builder(instance);

    this.wrapperExecuteIf = instance;
    return this;
  }

  protected flowList: IWrapperFlow[] = [];
  flow(flowBuilder: FlowFunctionType) {
    const flowWrap = new WrapperFlowBuilder().createWrapperFlow(flowBuilder);
    // flowBuilder(flowWrap);

    // this.flowInstance = flowWrap;
    this.flowList.push(flowWrap);

    return this;
  }
}

export default BulletFlowApi;

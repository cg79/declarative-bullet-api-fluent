import FluentBulletBase, {
  ConditionFieldType,
} from './fluent-bullet-base';
import WrapperFlow from './wrapper-flow';
import WrapperStopIf from './wrapper-stop-if';

export type FlowFunctionType = (x: BulletFlowApi) => FluentBulletBase;

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

  protected flowList = [];
  flow(flowBuilder: FlowFunctionType) {
    const flowWrap = new WrapperFlow();
    flowBuilder(flowWrap);

    // this.flowInstance = flowWrap;
    this.flowList.push(flowWrap);

    return this;
  }
}

export default BulletFlowApi;

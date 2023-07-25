import { FlowFunctionType } from "./bullet-flow";
import { IWrapperFlow } from "./i-wrapper-flow";
import WrapperFlow from "./wrapper-flow";

export class WrapperFlowBuilder {
    createWrapperFlow(flowBuilder: FlowFunctionType): IWrapperFlow {
        const flowWrap = new WrapperFlow();
        flowBuilder(flowWrap);

        return flowWrap;
    }
}

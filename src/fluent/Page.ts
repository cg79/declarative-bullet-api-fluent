import { FlowFunctionType } from './bullet-flow';
import { SortType } from './fluent-bullet-base';
import Sort from './Sort';
import WrapperFlow from './wrapper-flow';
import WrapperSort from './wrapper-sort';

class Page {
  protected itemsOnPageV = 5;
  itemsOnPage(value: number) {
    this.itemsOnPageV = value;
    return this;
  }

  protected pageNoV = 1;
  pageNo(value: number) {
    this.pageNoV = value;
    return this;
  }

  // protected flowList = [];
  // flow(flowBuilder: FlowFunctionType) {
  //   const flowWrap = new WrapperFlow();
  //   flowBuilder(flowWrap);

  //   // this.flowInstance = flowWrap;
  //   this.flowList.push(flowWrap);

  //   return this;
  // }

  protected repeatValue = false;
  repeat(value: boolean) {
    this.repeatValue = value;
    return this;
  }
  
}

export default Page;

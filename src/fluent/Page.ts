import { IPage } from "./IPage";

const Page =  function(): IPage{
  var itemsOnPageV = 5;
  var pageNoV = 1;
  var repeatValue = false;

  return {
    itemsOnPage: function (value: number){
      this.itemsOnPageV = value;
      return this;
    },
    pageNo: function(value: number) {
      this.pageNoV = value;
      return this;
    },
    repeat: function(value: boolean) {
      this.repeatValue = value;
      return this;
    }
  }
  

  
  

  // protected flowList = [];
  // flow(flowBuilder: FlowFunctionType) {
  //   const flowWrap = new WrapperFlow();
  //   flowBuilder(flowWrap);

  //   // this.flowInstance = flowWrap;
  //   this.flowList.push(flowWrap);

  //   return this;
  // }

  
  
  
}

export default Page;

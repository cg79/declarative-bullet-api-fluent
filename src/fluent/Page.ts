import { IPage } from "./IPage";
// import { FlowFunctionType } from "./facade";
// import WrapperFlow from "./wrapper-flow";

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
    },

    // flow: function (flowBuilder: FlowFunctionType) {
    //   const flowWrap = WrapperFlow().load(flowBuilder);
    //   // flowBuilder(flowWrap);

    //   // this.flowInstance = flowWrap;
    //   this.flowList.push(flowWrap);

    //   return this;
    // },
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

import Page from "./Page";
import { PageType } from "./fluent-bullet-base";
import { IPage } from "./IPage";

export interface IWrapperPage {
  __proto__: IPage;
  asJson: () => any;
  load: (builder: PageType) => IWrapperPage
}

const WrapperPage = function (): IWrapperPage {
  return {
    __proto__: Page(),
    asJson: function () {
      const response = {};
      response["itemsOnPage"] = this.itemsOnPageV;
      response["pageNo"] = this.pageNoV;

      // const flowListLength = this.flowList.length;
      // if (flowListLength) {
      //   if (flowListLength === 1) {
      //     response['flow'] = this.flowList[0].asJson();
      //   } else {
      //     const jsFlows = [];
      //     this.flowList.forEach((el: WrapperFlow) => jsFlows.push(el.asJson()));
      //     response['flow'] = jsFlows;
      //   }
      // }

      if (this.repeatValue) {
        response["repeat"] = true;
      }

      return response;
    },
    load: function(builder: PageType): IWrapperPage {
      builder(this);
      debugger;

      return this;
    }
  };
};

export default WrapperPage;

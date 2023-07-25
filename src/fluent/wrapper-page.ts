import Page from './Page';

class WrapperPage extends Page {
  asJson() {
    const response = {};
    response['itemsOnPage'] = this.itemsOnPageV;
    response['pageNo'] = this.pageNoV;

    return response;
  }
}

export default WrapperPage;

import { SortType } from './fluent-bullet-base';
import Sort from './Sort';
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
}

export default Page;

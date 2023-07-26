import {
  JoinCollectionType,
  JoinType,
  PageType,
  TakeFieldType,
  TakeType,
  SortType,
} from './fluent-bullet-base';
import WrapperJoin from './wrapper-join';
import WrapperJoinCollection from './wrapper-join-collection';
import WrapperPage from './wrapper-page';
import WrapperTake from './wrapper-take';
import WrapperSort from './wrapper-sort';

class Join {
  protected fieldV = '';
  field(value: string) {
    this.fieldV = value;
    return this;
  }

  protected keyV = '';
  key(value: string) {
    this.keyV = value;
    return this;
  }

  protected joinInstance: WrapperJoinCollection;
  with(builder: JoinCollectionType) {
    const joinInstance = new WrapperJoinCollection();
    builder(joinInstance);

    this.joinInstance = joinInstance;

    return this;
  }

  private selectObjValue = null;

  protected wrapperResponse: WrapperTake = null;
  response(builder: TakeType) {
    // if (!this.selectObjValue) {
    //   this.selectObjValue = {};
    // }

    const selectFieldInstance = new WrapperTake();
    builder(selectFieldInstance);

    this.wrapperResponse = selectFieldInstance;

    return this;
  }

  protected sortList: WrapperSort[] = null;
  sort(add: SortType) {
    if (!this.sortList) {
      this.sortList = [];
    }
    const sortInstance = new WrapperSort();
    add(sortInstance);

    this.sortList.push(sortInstance);

    return this;
  }

  protected pageInstance = null;
  page(builder: PageType) {
    const inst =  WrapperPage().load(builder);
    // builder(inst);

    this.pageInstance = inst;

    return this;
  }

  protected joinList: WrapperJoin[] = null;
  join(builder: JoinType) {
    if (!this.joinList) {
      this.joinList = [];
    }
    const joinInstance = new WrapperJoin();
    builder(joinInstance);

    this.joinList.push(joinInstance);

    return this;
  }
}

export default Join;

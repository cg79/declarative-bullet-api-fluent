import { ModuleFunctionType } from './fluent-bullet-base';
import WrapperModuleFunction from './wrapper-module-function';

class StopIf {
  // protected conditionV = '';
  // condition(value: string) {
  //   this.conditionV = value;
  //   return this;
  // }

  protected moduleFunctionInstance: WrapperModuleFunction;

  moduleFunction(builder: ModuleFunctionType) {
    const instance = new WrapperModuleFunction();
    builder(instance);

    this.moduleFunctionInstance = instance;

    return this;
  }

  protected errorcodeV = '';
  errorcode(value: string) {
    this.errorcodeV = value;
    return this;
  }
}

export default StopIf;

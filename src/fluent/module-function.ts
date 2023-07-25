import { TakeType, TraceType } from './fluent-bullet-base';
import WrapperTake from './wrapper-take';
import WrapperTrace from './wrapper-trace';

class ModuleFunction {
  protected moduleV = '';
  protected methodV = '';

  protected paramV = '';

  protected routeV = '';

  module(value: string) {
    this.moduleV = value;
    return this;
  }

  method(value: string) {
    this.methodV = value;
    return this;
  }

  paramValue(value: string) {
    this.paramV = value;
    return this;
  }

  route(value: string) {
    this.routeV = value;
    return this;
  }

  protected wrapperTakeInstance = null;
  take(builder: TakeType) {
    const instance = new WrapperTake();
    builder(instance);

    this.wrapperTakeInstance = instance;

    return this;
  }

  protected responseFieldInstance: WrapperTake = null;
  response(builder: TakeType) {
    const instance = new WrapperTake();
    builder(instance);
    this.responseFieldInstance = instance;
    return this;
  }

  protected wrapperTraceStart: WrapperTrace;
  traceStart(builder: TraceType) {
    const inst = new WrapperTrace();
    builder(inst);

    this.wrapperTraceStart = inst;

    return this;
  }

  protected wrapperTraceEnd: WrapperTrace;
  traceEnd(builder: TraceType) {
    const inst = new WrapperTrace();
    builder(inst);

    this.wrapperTraceEnd = inst;

    return this;
  }

  
}

export default ModuleFunction;

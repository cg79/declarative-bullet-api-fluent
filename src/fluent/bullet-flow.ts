import BodyField from "./body-field";
import BulletStorage from "./bullet-storage";
import ModuleFunction from "./module-function";
import WrapperFlow, { IWrapperFlow } from "./wrapper-flow";
import WrapperLog from "./wrapper-log";
import WrapperStopIf from "./wrapper-stop-if";
import WrapperStorage from "./wrapper-storage";
import WrapperTrace from "./wrapper-trace";
import WrapperFind from "./wrapper-find";
import WrapperSort from "./wrapper-sort";
import WrapperPage from "./wrapper-page";
import WrapperJoin from "./wrapper-join";
import WrapperBodyField from "./wrapper-body-field";
import WrapperTake from "./wrapper-take";
import Collection from "./collection";
import WrapperCollection from "./wrapper-collection";
import WrapperModuleFunction from "./wrapper-module-function";
import reuse from "../reuse";
import Log from "./Log";
import Trace from "./Trace";
import WrapperTrigger from "./wrapper-trigger";
import Trigger from "./Trigger";
import { BULLET_METHOD } from "./constants";
import { IPage } from "./IPage";
import {
  ConditionFieldType,
  FluentBulletBase,
  JoinType,
  SortType,
  TakeType,
} from "./fluent-bullet-base";
import Find from "./find";
export type FindType = (x: Find) => Find;

export type BodyFieldFunctionType = (x: BodyField) => BodyField;
export type ModuleFunctionType = (x: ModuleFunction) => ModuleFunction;
export type StorageType = (x: BulletStorage) => BulletStorage;
export type PageType = (x: IPage) => IPage;
export type CollectionType = (x: Collection) => Collection;
export type LogType = (x: Log) => Log;
export type TraceType = (x: Trace) => Trace;
export type TriggerType = (x: Trigger) => Trigger;

export interface IBulletFlowApi {
  stopIf(builder: ConditionFieldType): IBulletFlowApi;
  executeIf(builder: ConditionFieldType): IBulletFlowApi;
  flow(flowBuilder: FlowFunctionType): IBulletFlowApi;

  name(value: string): IBulletFlowApi;
  description(value: string): IBulletFlowApi;
  mergePreviousResultToFlowBody(value: boolean): IBulletFlowApi;
  mergePreviousResultToFlowResult(value: boolean): IBulletFlowApi;
  saveForLaterUse(value: boolean): IBulletFlowApi;
  executeFlowByName(flowName: string): IBulletFlowApi;
  log(builder: LogType): IBulletFlowApi;
  traceStart(builder: TraceType): IBulletFlowApi;
  traceEnd(builder: TraceType): IBulletFlowApi;
  collection(builder: CollectionType): IBulletFlowApi;
  insert(collectionName): IBulletFlowApi;
  update(collectionName): IBulletFlowApi;
  updateOne(collectionName): IBulletFlowApi;
  delete(collectionName): IBulletFlowApi;
  deleteOne(collectionName): IBulletFlowApi;
  pagination(collectionName): IBulletFlowApi;
  find(collectionName): IBulletFlowApi;
  findOne(collectionName): IBulletFlowApi;
  key(value: string): IBulletFlowApi;
  storage(builder: StorageType): IBulletFlowApi;
  body(data: any): IBulletFlowApi;
  bodyField(fieldName: string, builder: BodyFieldFunctionType): IBulletFlowApi;
  take(builder: TakeType): IBulletFlowApi;
  response(builder: TakeType): IBulletFlowApi;
  merge(builder: ModuleFunctionType): IBulletFlowApi;
  join(builder: JoinType): IBulletFlowApi;
  page(builder: PageType): IBulletFlowApi;
  sort(sortType: SortType): IBulletFlowApi;
  search(find: FindType): IBulletFlowApi;
  ReqId(value: string): IBulletFlowApi;
}

export type FlowFunctionType = (x: IBulletFlowApi) => IBulletFlowApi;

const BulletFlowApi = function (): IBulletFlowApi {
  var wrapperStopIf: WrapperStopIf;
  var wrapperExecuteIf: WrapperStopIf;
  var flowList: IWrapperFlow[] = [];
  var _name = "";
  var _description = "";
  var _mergePreviousResultToFlowBody = false;
  var _mergePreviousResultToFlowResult = false;
  var _saveForLaterUse = false;
  var _flowName = "";
  var wrapperLog: WrapperLog;
  var wrapperTraceStart: WrapperTrace;
  var wrapperTraceEnd: WrapperTrace;

  return {
    ...FluentBulletBase(),
    
    flow: function (flowBuilder: FlowFunctionType) {
      const flowWrap = WrapperFlow().load(flowBuilder);
      // flowBuilder(flowWrap);

      // this.flowInstance = flowWrap;
      this.flowList.push(flowWrap);

      return this;
    },
  };
};

export default BulletFlowApi;

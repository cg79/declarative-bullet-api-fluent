import BodyField from "./body-field";
import BulletStorage from "./bullet-storage";
import SelectKey from "./take-key";
import Select from "./take";
import TakeBase from "./take-base";
import StopIf from "./stop-if";
import Join from "./join";
import JoinCollection from "./join-collection";
import Find from "./find";
import Sort from "./Sort";
import Page from "./Page";
import WrapperFind from "./wrapper-find";
import WrapperSort from "./wrapper-sort";
import WrapperPage from "./wrapper-page";
import WrapperJoin from "./wrapper-join";
import WrapperBodyField from "./wrapper-body-field";
import WrapperStorage from "./wrapper-storage";
import WrapperTake from "./wrapper-take";
import Collection from "./collection";
import ModuleFunction from "./module-function";
import WrapperCollection from "./wrapper-collection";
import WrapperModuleFunction from "./wrapper-module-function";
import reuse from "../reuse";
import WrapperLog from "./wrapper-log";
import Log from "./Log";
import Trace from "./Trace";
import WrapperTrigger from "./wrapper-trigger";
import Trigger from "./Trigger";
import WrapperTrace from "./wrapper-trace";
import { BULLET_METHOD } from "./constants";
import { IPage } from "./IPage";
import WrapperStopIf from "./wrapper-stop-if";
export type BodyFieldFunctionType = (x: BodyField) => BodyField;
export type ModuleFunctionType = (x: ModuleFunction) => ModuleFunction;
export type StorageType = (x: BulletStorage) => BulletStorage;
export type TakeFieldType = (x: SelectKey) => SelectKey;
export type TakeType = (x: Select) => Select;
export type TakeBaseType = (x: TakeBase) => TakeBase;
export type JoinType = (x: Join) => Join;
export type PageType = (x: IPage) => IPage;
export type SortType = (x: Sort) => Sort;
export type JoinCollectionType = (x: JoinCollection) => JoinCollection;
export type ConditionFieldType = (x: StopIf) => StopIf;
export type FindType = (x: Find) => Find;
export type CollectionType = (x: Collection) => Collection;
export type LogType = (x: Log) => Log;
export type TraceType = (x: Trace) => Trace;
export type TriggerType = (x: Trigger) => Trigger;

export const FluentBulletBase = function () {
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
    take: function (builder: TakeType) {
      const instance = new WrapperTake();
      builder(instance);

      this.wrapperTakeInstance = instance;

      return this;
    },
    merge: function (builder: ModuleFunctionType) {
      const instance = new WrapperModuleFunction();
      builder(instance);

      this.mergeFunctionInstance = instance;

      return this;
    },
    join: function (builder: JoinType) {
      if (!this.joinList) {
        this.joinList = [];
      }
      const joinInstance = new WrapperJoin();
      builder(joinInstance);

      this.joinList.push(joinInstance);

      return this;
    },

    page: function (builder: PageType) {
      const inst = WrapperPage().load(builder);

      this.pageInstance = inst;

      return this;
    },

    sort: function (sortType: SortType) {
      if (!this.sortList) {
        this.sortList = [];
      }
      const sortInstance = new WrapperSort();
      sortType(sortInstance);

      this.sortList.push(sortInstance);

      return this;
    },

    search: function (find: FindType) {
      const findInstance = new WrapperFind();
      find(findInstance);

      this.findInstance = findInstance;
      return this;
    },

    response: function (builder: TakeType) {
      const instance = new WrapperTake();
      builder(instance);

      this.wrapperResponseInstance = instance;

      return this;
    },
    mergePreviousResultToFlowResult: function (value: boolean) {
      this._mergePreviousResultToFlowResult = value;
      return this;
    },
    executeFlowByName: function (flowName: string) {
      this._flowName = flowName;
      return this;
    },
    saveForLaterUse: function (value: boolean) {
      this._saveForLaterUse = value;
      return this;
    },

    traceStart: function (builder: TraceType) {
      const inst = new WrapperTrace();
      builder(inst);

      this.wrapperTraceStart = inst;

      return this;
    },
    traceEnd: function (builder: TraceType) {
      const inst = new WrapperTrace();
      builder(inst);

      this.wrapperTraceEnd = inst;

      return this;
    },
    log: function (builder: LogType) {
      const inst = new WrapperLog();
      builder(inst);

      this.wrapperLog = inst;

      return this;
    },
    name: function (value: string) {
      this._name = value;
      return this;
    },
    mergePreviousResultToFlowBody: function (value: boolean) {
      this._mergePreviousResultToFlowBody = value;
      return this;
    },
    description: function (value: string) {
      this._description = value;
      return this;
    },
    stopIf: function (builder: ConditionFieldType) {
      const instance = new WrapperStopIf();
      builder(instance);

      this.wrapperStopIf = instance;
      return this;
    },
    executeIf: function (builder: ConditionFieldType) {
      const instance = new WrapperStopIf();
      builder(instance);

      this.wrapperExecuteIf = instance;
      return this;
    },
    collection: function (builder: CollectionType) {
      const inst = new WrapperCollection();
      builder(inst);

      this._collection = inst;
      return this;
    },

    insert: function (collectionName) {
      const inst = new WrapperCollection();
      inst.name(collectionName);
      inst.method(BULLET_METHOD.INSERT);

      this._collection = inst;
      return this;
    },

    update: function (collectionName) {
      const inst = new WrapperCollection();
      inst.name(collectionName);
      inst.method(BULLET_METHOD.UPDATE);

      this._collection = inst;
      return this;
    },

    updateOne: function (collectionName) {
      const inst = new WrapperCollection();
      inst.name(collectionName);
      inst.method(BULLET_METHOD.UPDATE_ONE);

      this._collection = inst;
      return this;
    },

    delete: function (collectionName) {
      const inst = new WrapperCollection();
      inst.name(collectionName);
      inst.method(BULLET_METHOD.DELETE);

      this._collection = inst;
      return this;
    },

    deleteOne: function (collectionName) {
      const inst = new WrapperCollection();
      inst.name(collectionName);
      inst.method(BULLET_METHOD.DELETE_ONE);

      this._collection = inst;
      return this;
    },

    pagination: function (collectionName) {
      const inst = new WrapperCollection();
      inst.name(collectionName);
      inst.method(BULLET_METHOD.PAGINATION);

      this._collection = inst;
      return this;
    },

    find: function (collectionName) {
      const inst = new WrapperCollection();
      inst.name(collectionName);
      inst.method(BULLET_METHOD.FIND);

      this._collection = inst;
      return this;
    },

    findOne: function (collectionName) {
      const inst = new WrapperCollection();
      inst.name(collectionName);
      inst.method(BULLET_METHOD.FIND_ONE);

      this._collection = inst;
      return this;
    },

    //todo useprefix sa adaug aici si la flow

    key: function (value: string) {
      this.keyValue = value;
      return this;
    },

    storage: function (builder: StorageType) {
      const instance = new WrapperStorage();
      builder(instance);

      this.storageInstance = instance;
      // this.data.storage = storageInstance.asJson();

      return this;
    },

    body: function (data: any = {}) {
      this.bodyV = data;

      return this;
    },

    bodyField: function (fieldName: string, builder: BodyFieldFunctionType) {
      const instance = new WrapperBodyField();
      builder(instance);

      this.bodyFields.push({
        key: fieldName,
        instance,
      });

      return this;
    },
    ReqId: function (value: string) {
      this.reqIdV = value;
      return this;
    },
  };
};

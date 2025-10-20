
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ProcessedEvent
 * 
 */
export type ProcessedEvent = $Result.DefaultSelection<Prisma.$ProcessedEventPayload>
/**
 * Model IndexerMeta
 * 
 */
export type IndexerMeta = $Result.DefaultSelection<Prisma.$IndexerMetaPayload>
/**
 * Model ProcessedBlock
 * 
 */
export type ProcessedBlock = $Result.DefaultSelection<Prisma.$ProcessedBlockPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  open: 'open',
  filled: 'filled',
  cancelled: 'cancelled',
  invalid: 'invalid'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ProcessedEvents
 * const processedEvents = await prisma.processedEvent.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ProcessedEvents
   * const processedEvents = await prisma.processedEvent.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.processedEvent`: Exposes CRUD operations for the **ProcessedEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProcessedEvents
    * const processedEvents = await prisma.processedEvent.findMany()
    * ```
    */
  get processedEvent(): Prisma.ProcessedEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.indexerMeta`: Exposes CRUD operations for the **IndexerMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IndexerMetas
    * const indexerMetas = await prisma.indexerMeta.findMany()
    * ```
    */
  get indexerMeta(): Prisma.IndexerMetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.processedBlock`: Exposes CRUD operations for the **ProcessedBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProcessedBlocks
    * const processedBlocks = await prisma.processedBlock.findMany()
    * ```
    */
  get processedBlock(): Prisma.ProcessedBlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.0
   * Query Engine version: c0aafc03b8ef6cdced8654b9a817999e02457d6a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ProcessedEvent: 'ProcessedEvent',
    IndexerMeta: 'IndexerMeta',
    ProcessedBlock: 'ProcessedBlock',
    Order: 'Order'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "processedEvent" | "indexerMeta" | "processedBlock" | "order"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ProcessedEvent: {
        payload: Prisma.$ProcessedEventPayload<ExtArgs>
        fields: Prisma.ProcessedEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcessedEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcessedEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedEventPayload>
          }
          findFirst: {
            args: Prisma.ProcessedEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcessedEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedEventPayload>
          }
          findMany: {
            args: Prisma.ProcessedEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedEventPayload>[]
          }
          create: {
            args: Prisma.ProcessedEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedEventPayload>
          }
          createMany: {
            args: Prisma.ProcessedEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProcessedEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedEventPayload>[]
          }
          delete: {
            args: Prisma.ProcessedEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedEventPayload>
          }
          update: {
            args: Prisma.ProcessedEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedEventPayload>
          }
          deleteMany: {
            args: Prisma.ProcessedEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcessedEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProcessedEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedEventPayload>[]
          }
          upsert: {
            args: Prisma.ProcessedEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedEventPayload>
          }
          aggregate: {
            args: Prisma.ProcessedEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcessedEvent>
          }
          groupBy: {
            args: Prisma.ProcessedEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcessedEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcessedEventCountArgs<ExtArgs>
            result: $Utils.Optional<ProcessedEventCountAggregateOutputType> | number
          }
        }
      }
      IndexerMeta: {
        payload: Prisma.$IndexerMetaPayload<ExtArgs>
        fields: Prisma.IndexerMetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndexerMetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexerMetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndexerMetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexerMetaPayload>
          }
          findFirst: {
            args: Prisma.IndexerMetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexerMetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndexerMetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexerMetaPayload>
          }
          findMany: {
            args: Prisma.IndexerMetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexerMetaPayload>[]
          }
          create: {
            args: Prisma.IndexerMetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexerMetaPayload>
          }
          createMany: {
            args: Prisma.IndexerMetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndexerMetaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexerMetaPayload>[]
          }
          delete: {
            args: Prisma.IndexerMetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexerMetaPayload>
          }
          update: {
            args: Prisma.IndexerMetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexerMetaPayload>
          }
          deleteMany: {
            args: Prisma.IndexerMetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndexerMetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndexerMetaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexerMetaPayload>[]
          }
          upsert: {
            args: Prisma.IndexerMetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexerMetaPayload>
          }
          aggregate: {
            args: Prisma.IndexerMetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndexerMeta>
          }
          groupBy: {
            args: Prisma.IndexerMetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndexerMetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndexerMetaCountArgs<ExtArgs>
            result: $Utils.Optional<IndexerMetaCountAggregateOutputType> | number
          }
        }
      }
      ProcessedBlock: {
        payload: Prisma.$ProcessedBlockPayload<ExtArgs>
        fields: Prisma.ProcessedBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcessedBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcessedBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedBlockPayload>
          }
          findFirst: {
            args: Prisma.ProcessedBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcessedBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedBlockPayload>
          }
          findMany: {
            args: Prisma.ProcessedBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedBlockPayload>[]
          }
          create: {
            args: Prisma.ProcessedBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedBlockPayload>
          }
          createMany: {
            args: Prisma.ProcessedBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProcessedBlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedBlockPayload>[]
          }
          delete: {
            args: Prisma.ProcessedBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedBlockPayload>
          }
          update: {
            args: Prisma.ProcessedBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedBlockPayload>
          }
          deleteMany: {
            args: Prisma.ProcessedBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcessedBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProcessedBlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedBlockPayload>[]
          }
          upsert: {
            args: Prisma.ProcessedBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedBlockPayload>
          }
          aggregate: {
            args: Prisma.ProcessedBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcessedBlock>
          }
          groupBy: {
            args: Prisma.ProcessedBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcessedBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcessedBlockCountArgs<ExtArgs>
            result: $Utils.Optional<ProcessedBlockCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    processedEvent?: ProcessedEventOmit
    indexerMeta?: IndexerMetaOmit
    processedBlock?: ProcessedBlockOmit
    order?: OrderOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model ProcessedEvent
   */

  export type AggregateProcessedEvent = {
    _count: ProcessedEventCountAggregateOutputType | null
    _avg: ProcessedEventAvgAggregateOutputType | null
    _sum: ProcessedEventSumAggregateOutputType | null
    _min: ProcessedEventMinAggregateOutputType | null
    _max: ProcessedEventMaxAggregateOutputType | null
  }

  export type ProcessedEventAvgAggregateOutputType = {
    logIndex: number | null
  }

  export type ProcessedEventSumAggregateOutputType = {
    logIndex: number | null
  }

  export type ProcessedEventMinAggregateOutputType = {
    eventId: string | null
    txHash: string | null
    logIndex: number | null
    eventType: string | null
    createdAt: Date | null
  }

  export type ProcessedEventMaxAggregateOutputType = {
    eventId: string | null
    txHash: string | null
    logIndex: number | null
    eventType: string | null
    createdAt: Date | null
  }

  export type ProcessedEventCountAggregateOutputType = {
    eventId: number
    txHash: number
    logIndex: number
    eventType: number
    createdAt: number
    _all: number
  }


  export type ProcessedEventAvgAggregateInputType = {
    logIndex?: true
  }

  export type ProcessedEventSumAggregateInputType = {
    logIndex?: true
  }

  export type ProcessedEventMinAggregateInputType = {
    eventId?: true
    txHash?: true
    logIndex?: true
    eventType?: true
    createdAt?: true
  }

  export type ProcessedEventMaxAggregateInputType = {
    eventId?: true
    txHash?: true
    logIndex?: true
    eventType?: true
    createdAt?: true
  }

  export type ProcessedEventCountAggregateInputType = {
    eventId?: true
    txHash?: true
    logIndex?: true
    eventType?: true
    createdAt?: true
    _all?: true
  }

  export type ProcessedEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessedEvent to aggregate.
     */
    where?: ProcessedEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessedEvents to fetch.
     */
    orderBy?: ProcessedEventOrderByWithRelationInput | ProcessedEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcessedEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessedEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessedEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProcessedEvents
    **/
    _count?: true | ProcessedEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProcessedEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProcessedEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessedEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessedEventMaxAggregateInputType
  }

  export type GetProcessedEventAggregateType<T extends ProcessedEventAggregateArgs> = {
        [P in keyof T & keyof AggregateProcessedEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcessedEvent[P]>
      : GetScalarType<T[P], AggregateProcessedEvent[P]>
  }




  export type ProcessedEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessedEventWhereInput
    orderBy?: ProcessedEventOrderByWithAggregationInput | ProcessedEventOrderByWithAggregationInput[]
    by: ProcessedEventScalarFieldEnum[] | ProcessedEventScalarFieldEnum
    having?: ProcessedEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessedEventCountAggregateInputType | true
    _avg?: ProcessedEventAvgAggregateInputType
    _sum?: ProcessedEventSumAggregateInputType
    _min?: ProcessedEventMinAggregateInputType
    _max?: ProcessedEventMaxAggregateInputType
  }

  export type ProcessedEventGroupByOutputType = {
    eventId: string
    txHash: string
    logIndex: number
    eventType: string
    createdAt: Date
    _count: ProcessedEventCountAggregateOutputType | null
    _avg: ProcessedEventAvgAggregateOutputType | null
    _sum: ProcessedEventSumAggregateOutputType | null
    _min: ProcessedEventMinAggregateOutputType | null
    _max: ProcessedEventMaxAggregateOutputType | null
  }

  type GetProcessedEventGroupByPayload<T extends ProcessedEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcessedEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessedEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessedEventGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessedEventGroupByOutputType[P]>
        }
      >
    >


  export type ProcessedEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    txHash?: boolean
    logIndex?: boolean
    eventType?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["processedEvent"]>

  export type ProcessedEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    txHash?: boolean
    logIndex?: boolean
    eventType?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["processedEvent"]>

  export type ProcessedEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    txHash?: boolean
    logIndex?: boolean
    eventType?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["processedEvent"]>

  export type ProcessedEventSelectScalar = {
    eventId?: boolean
    txHash?: boolean
    logIndex?: boolean
    eventType?: boolean
    createdAt?: boolean
  }

  export type ProcessedEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"eventId" | "txHash" | "logIndex" | "eventType" | "createdAt", ExtArgs["result"]["processedEvent"]>

  export type $ProcessedEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProcessedEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      eventId: string
      txHash: string
      logIndex: number
      eventType: string
      createdAt: Date
    }, ExtArgs["result"]["processedEvent"]>
    composites: {}
  }

  type ProcessedEventGetPayload<S extends boolean | null | undefined | ProcessedEventDefaultArgs> = $Result.GetResult<Prisma.$ProcessedEventPayload, S>

  type ProcessedEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcessedEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcessedEventCountAggregateInputType | true
    }

  export interface ProcessedEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProcessedEvent'], meta: { name: 'ProcessedEvent' } }
    /**
     * Find zero or one ProcessedEvent that matches the filter.
     * @param {ProcessedEventFindUniqueArgs} args - Arguments to find a ProcessedEvent
     * @example
     * // Get one ProcessedEvent
     * const processedEvent = await prisma.processedEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessedEventFindUniqueArgs>(args: SelectSubset<T, ProcessedEventFindUniqueArgs<ExtArgs>>): Prisma__ProcessedEventClient<$Result.GetResult<Prisma.$ProcessedEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProcessedEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessedEventFindUniqueOrThrowArgs} args - Arguments to find a ProcessedEvent
     * @example
     * // Get one ProcessedEvent
     * const processedEvent = await prisma.processedEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessedEventFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessedEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessedEventClient<$Result.GetResult<Prisma.$ProcessedEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessedEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedEventFindFirstArgs} args - Arguments to find a ProcessedEvent
     * @example
     * // Get one ProcessedEvent
     * const processedEvent = await prisma.processedEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessedEventFindFirstArgs>(args?: SelectSubset<T, ProcessedEventFindFirstArgs<ExtArgs>>): Prisma__ProcessedEventClient<$Result.GetResult<Prisma.$ProcessedEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessedEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedEventFindFirstOrThrowArgs} args - Arguments to find a ProcessedEvent
     * @example
     * // Get one ProcessedEvent
     * const processedEvent = await prisma.processedEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessedEventFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessedEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessedEventClient<$Result.GetResult<Prisma.$ProcessedEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProcessedEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProcessedEvents
     * const processedEvents = await prisma.processedEvent.findMany()
     * 
     * // Get first 10 ProcessedEvents
     * const processedEvents = await prisma.processedEvent.findMany({ take: 10 })
     * 
     * // Only select the `eventId`
     * const processedEventWithEventIdOnly = await prisma.processedEvent.findMany({ select: { eventId: true } })
     * 
     */
    findMany<T extends ProcessedEventFindManyArgs>(args?: SelectSubset<T, ProcessedEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessedEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProcessedEvent.
     * @param {ProcessedEventCreateArgs} args - Arguments to create a ProcessedEvent.
     * @example
     * // Create one ProcessedEvent
     * const ProcessedEvent = await prisma.processedEvent.create({
     *   data: {
     *     // ... data to create a ProcessedEvent
     *   }
     * })
     * 
     */
    create<T extends ProcessedEventCreateArgs>(args: SelectSubset<T, ProcessedEventCreateArgs<ExtArgs>>): Prisma__ProcessedEventClient<$Result.GetResult<Prisma.$ProcessedEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProcessedEvents.
     * @param {ProcessedEventCreateManyArgs} args - Arguments to create many ProcessedEvents.
     * @example
     * // Create many ProcessedEvents
     * const processedEvent = await prisma.processedEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcessedEventCreateManyArgs>(args?: SelectSubset<T, ProcessedEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProcessedEvents and returns the data saved in the database.
     * @param {ProcessedEventCreateManyAndReturnArgs} args - Arguments to create many ProcessedEvents.
     * @example
     * // Create many ProcessedEvents
     * const processedEvent = await prisma.processedEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProcessedEvents and only return the `eventId`
     * const processedEventWithEventIdOnly = await prisma.processedEvent.createManyAndReturn({
     *   select: { eventId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProcessedEventCreateManyAndReturnArgs>(args?: SelectSubset<T, ProcessedEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessedEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProcessedEvent.
     * @param {ProcessedEventDeleteArgs} args - Arguments to delete one ProcessedEvent.
     * @example
     * // Delete one ProcessedEvent
     * const ProcessedEvent = await prisma.processedEvent.delete({
     *   where: {
     *     // ... filter to delete one ProcessedEvent
     *   }
     * })
     * 
     */
    delete<T extends ProcessedEventDeleteArgs>(args: SelectSubset<T, ProcessedEventDeleteArgs<ExtArgs>>): Prisma__ProcessedEventClient<$Result.GetResult<Prisma.$ProcessedEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProcessedEvent.
     * @param {ProcessedEventUpdateArgs} args - Arguments to update one ProcessedEvent.
     * @example
     * // Update one ProcessedEvent
     * const processedEvent = await prisma.processedEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcessedEventUpdateArgs>(args: SelectSubset<T, ProcessedEventUpdateArgs<ExtArgs>>): Prisma__ProcessedEventClient<$Result.GetResult<Prisma.$ProcessedEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProcessedEvents.
     * @param {ProcessedEventDeleteManyArgs} args - Arguments to filter ProcessedEvents to delete.
     * @example
     * // Delete a few ProcessedEvents
     * const { count } = await prisma.processedEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcessedEventDeleteManyArgs>(args?: SelectSubset<T, ProcessedEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessedEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProcessedEvents
     * const processedEvent = await prisma.processedEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcessedEventUpdateManyArgs>(args: SelectSubset<T, ProcessedEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessedEvents and returns the data updated in the database.
     * @param {ProcessedEventUpdateManyAndReturnArgs} args - Arguments to update many ProcessedEvents.
     * @example
     * // Update many ProcessedEvents
     * const processedEvent = await prisma.processedEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProcessedEvents and only return the `eventId`
     * const processedEventWithEventIdOnly = await prisma.processedEvent.updateManyAndReturn({
     *   select: { eventId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProcessedEventUpdateManyAndReturnArgs>(args: SelectSubset<T, ProcessedEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessedEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProcessedEvent.
     * @param {ProcessedEventUpsertArgs} args - Arguments to update or create a ProcessedEvent.
     * @example
     * // Update or create a ProcessedEvent
     * const processedEvent = await prisma.processedEvent.upsert({
     *   create: {
     *     // ... data to create a ProcessedEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProcessedEvent we want to update
     *   }
     * })
     */
    upsert<T extends ProcessedEventUpsertArgs>(args: SelectSubset<T, ProcessedEventUpsertArgs<ExtArgs>>): Prisma__ProcessedEventClient<$Result.GetResult<Prisma.$ProcessedEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProcessedEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedEventCountArgs} args - Arguments to filter ProcessedEvents to count.
     * @example
     * // Count the number of ProcessedEvents
     * const count = await prisma.processedEvent.count({
     *   where: {
     *     // ... the filter for the ProcessedEvents we want to count
     *   }
     * })
    **/
    count<T extends ProcessedEventCountArgs>(
      args?: Subset<T, ProcessedEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessedEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProcessedEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProcessedEventAggregateArgs>(args: Subset<T, ProcessedEventAggregateArgs>): Prisma.PrismaPromise<GetProcessedEventAggregateType<T>>

    /**
     * Group by ProcessedEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProcessedEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessedEventGroupByArgs['orderBy'] }
        : { orderBy?: ProcessedEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProcessedEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessedEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProcessedEvent model
   */
  readonly fields: ProcessedEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProcessedEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcessedEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProcessedEvent model
   */
  interface ProcessedEventFieldRefs {
    readonly eventId: FieldRef<"ProcessedEvent", 'String'>
    readonly txHash: FieldRef<"ProcessedEvent", 'String'>
    readonly logIndex: FieldRef<"ProcessedEvent", 'Int'>
    readonly eventType: FieldRef<"ProcessedEvent", 'String'>
    readonly createdAt: FieldRef<"ProcessedEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProcessedEvent findUnique
   */
  export type ProcessedEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedEvent
     */
    select?: ProcessedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedEvent
     */
    omit?: ProcessedEventOmit<ExtArgs> | null
    /**
     * Filter, which ProcessedEvent to fetch.
     */
    where: ProcessedEventWhereUniqueInput
  }

  /**
   * ProcessedEvent findUniqueOrThrow
   */
  export type ProcessedEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedEvent
     */
    select?: ProcessedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedEvent
     */
    omit?: ProcessedEventOmit<ExtArgs> | null
    /**
     * Filter, which ProcessedEvent to fetch.
     */
    where: ProcessedEventWhereUniqueInput
  }

  /**
   * ProcessedEvent findFirst
   */
  export type ProcessedEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedEvent
     */
    select?: ProcessedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedEvent
     */
    omit?: ProcessedEventOmit<ExtArgs> | null
    /**
     * Filter, which ProcessedEvent to fetch.
     */
    where?: ProcessedEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessedEvents to fetch.
     */
    orderBy?: ProcessedEventOrderByWithRelationInput | ProcessedEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessedEvents.
     */
    cursor?: ProcessedEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessedEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessedEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessedEvents.
     */
    distinct?: ProcessedEventScalarFieldEnum | ProcessedEventScalarFieldEnum[]
  }

  /**
   * ProcessedEvent findFirstOrThrow
   */
  export type ProcessedEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedEvent
     */
    select?: ProcessedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedEvent
     */
    omit?: ProcessedEventOmit<ExtArgs> | null
    /**
     * Filter, which ProcessedEvent to fetch.
     */
    where?: ProcessedEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessedEvents to fetch.
     */
    orderBy?: ProcessedEventOrderByWithRelationInput | ProcessedEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessedEvents.
     */
    cursor?: ProcessedEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessedEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessedEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessedEvents.
     */
    distinct?: ProcessedEventScalarFieldEnum | ProcessedEventScalarFieldEnum[]
  }

  /**
   * ProcessedEvent findMany
   */
  export type ProcessedEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedEvent
     */
    select?: ProcessedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedEvent
     */
    omit?: ProcessedEventOmit<ExtArgs> | null
    /**
     * Filter, which ProcessedEvents to fetch.
     */
    where?: ProcessedEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessedEvents to fetch.
     */
    orderBy?: ProcessedEventOrderByWithRelationInput | ProcessedEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProcessedEvents.
     */
    cursor?: ProcessedEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessedEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessedEvents.
     */
    skip?: number
    distinct?: ProcessedEventScalarFieldEnum | ProcessedEventScalarFieldEnum[]
  }

  /**
   * ProcessedEvent create
   */
  export type ProcessedEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedEvent
     */
    select?: ProcessedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedEvent
     */
    omit?: ProcessedEventOmit<ExtArgs> | null
    /**
     * The data needed to create a ProcessedEvent.
     */
    data: XOR<ProcessedEventCreateInput, ProcessedEventUncheckedCreateInput>
  }

  /**
   * ProcessedEvent createMany
   */
  export type ProcessedEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProcessedEvents.
     */
    data: ProcessedEventCreateManyInput | ProcessedEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProcessedEvent createManyAndReturn
   */
  export type ProcessedEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedEvent
     */
    select?: ProcessedEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedEvent
     */
    omit?: ProcessedEventOmit<ExtArgs> | null
    /**
     * The data used to create many ProcessedEvents.
     */
    data: ProcessedEventCreateManyInput | ProcessedEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProcessedEvent update
   */
  export type ProcessedEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedEvent
     */
    select?: ProcessedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedEvent
     */
    omit?: ProcessedEventOmit<ExtArgs> | null
    /**
     * The data needed to update a ProcessedEvent.
     */
    data: XOR<ProcessedEventUpdateInput, ProcessedEventUncheckedUpdateInput>
    /**
     * Choose, which ProcessedEvent to update.
     */
    where: ProcessedEventWhereUniqueInput
  }

  /**
   * ProcessedEvent updateMany
   */
  export type ProcessedEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProcessedEvents.
     */
    data: XOR<ProcessedEventUpdateManyMutationInput, ProcessedEventUncheckedUpdateManyInput>
    /**
     * Filter which ProcessedEvents to update
     */
    where?: ProcessedEventWhereInput
    /**
     * Limit how many ProcessedEvents to update.
     */
    limit?: number
  }

  /**
   * ProcessedEvent updateManyAndReturn
   */
  export type ProcessedEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedEvent
     */
    select?: ProcessedEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedEvent
     */
    omit?: ProcessedEventOmit<ExtArgs> | null
    /**
     * The data used to update ProcessedEvents.
     */
    data: XOR<ProcessedEventUpdateManyMutationInput, ProcessedEventUncheckedUpdateManyInput>
    /**
     * Filter which ProcessedEvents to update
     */
    where?: ProcessedEventWhereInput
    /**
     * Limit how many ProcessedEvents to update.
     */
    limit?: number
  }

  /**
   * ProcessedEvent upsert
   */
  export type ProcessedEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedEvent
     */
    select?: ProcessedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedEvent
     */
    omit?: ProcessedEventOmit<ExtArgs> | null
    /**
     * The filter to search for the ProcessedEvent to update in case it exists.
     */
    where: ProcessedEventWhereUniqueInput
    /**
     * In case the ProcessedEvent found by the `where` argument doesn't exist, create a new ProcessedEvent with this data.
     */
    create: XOR<ProcessedEventCreateInput, ProcessedEventUncheckedCreateInput>
    /**
     * In case the ProcessedEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessedEventUpdateInput, ProcessedEventUncheckedUpdateInput>
  }

  /**
   * ProcessedEvent delete
   */
  export type ProcessedEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedEvent
     */
    select?: ProcessedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedEvent
     */
    omit?: ProcessedEventOmit<ExtArgs> | null
    /**
     * Filter which ProcessedEvent to delete.
     */
    where: ProcessedEventWhereUniqueInput
  }

  /**
   * ProcessedEvent deleteMany
   */
  export type ProcessedEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessedEvents to delete
     */
    where?: ProcessedEventWhereInput
    /**
     * Limit how many ProcessedEvents to delete.
     */
    limit?: number
  }

  /**
   * ProcessedEvent without action
   */
  export type ProcessedEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedEvent
     */
    select?: ProcessedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedEvent
     */
    omit?: ProcessedEventOmit<ExtArgs> | null
  }


  /**
   * Model IndexerMeta
   */

  export type AggregateIndexerMeta = {
    _count: IndexerMetaCountAggregateOutputType | null
    _min: IndexerMetaMinAggregateOutputType | null
    _max: IndexerMetaMaxAggregateOutputType | null
  }

  export type IndexerMetaMinAggregateOutputType = {
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IndexerMetaMaxAggregateOutputType = {
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IndexerMetaCountAggregateOutputType = {
    key: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IndexerMetaMinAggregateInputType = {
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IndexerMetaMaxAggregateInputType = {
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IndexerMetaCountAggregateInputType = {
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IndexerMetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndexerMeta to aggregate.
     */
    where?: IndexerMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexerMetas to fetch.
     */
    orderBy?: IndexerMetaOrderByWithRelationInput | IndexerMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndexerMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexerMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexerMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IndexerMetas
    **/
    _count?: true | IndexerMetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndexerMetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndexerMetaMaxAggregateInputType
  }

  export type GetIndexerMetaAggregateType<T extends IndexerMetaAggregateArgs> = {
        [P in keyof T & keyof AggregateIndexerMeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndexerMeta[P]>
      : GetScalarType<T[P], AggregateIndexerMeta[P]>
  }




  export type IndexerMetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndexerMetaWhereInput
    orderBy?: IndexerMetaOrderByWithAggregationInput | IndexerMetaOrderByWithAggregationInput[]
    by: IndexerMetaScalarFieldEnum[] | IndexerMetaScalarFieldEnum
    having?: IndexerMetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndexerMetaCountAggregateInputType | true
    _min?: IndexerMetaMinAggregateInputType
    _max?: IndexerMetaMaxAggregateInputType
  }

  export type IndexerMetaGroupByOutputType = {
    key: string
    value: string
    createdAt: Date
    updatedAt: Date
    _count: IndexerMetaCountAggregateOutputType | null
    _min: IndexerMetaMinAggregateOutputType | null
    _max: IndexerMetaMaxAggregateOutputType | null
  }

  type GetIndexerMetaGroupByPayload<T extends IndexerMetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndexerMetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndexerMetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndexerMetaGroupByOutputType[P]>
            : GetScalarType<T[P], IndexerMetaGroupByOutputType[P]>
        }
      >
    >


  export type IndexerMetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["indexerMeta"]>

  export type IndexerMetaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["indexerMeta"]>

  export type IndexerMetaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["indexerMeta"]>

  export type IndexerMetaSelectScalar = {
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IndexerMetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "value" | "createdAt" | "updatedAt", ExtArgs["result"]["indexerMeta"]>

  export type $IndexerMetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IndexerMeta"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["indexerMeta"]>
    composites: {}
  }

  type IndexerMetaGetPayload<S extends boolean | null | undefined | IndexerMetaDefaultArgs> = $Result.GetResult<Prisma.$IndexerMetaPayload, S>

  type IndexerMetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndexerMetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndexerMetaCountAggregateInputType | true
    }

  export interface IndexerMetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IndexerMeta'], meta: { name: 'IndexerMeta' } }
    /**
     * Find zero or one IndexerMeta that matches the filter.
     * @param {IndexerMetaFindUniqueArgs} args - Arguments to find a IndexerMeta
     * @example
     * // Get one IndexerMeta
     * const indexerMeta = await prisma.indexerMeta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndexerMetaFindUniqueArgs>(args: SelectSubset<T, IndexerMetaFindUniqueArgs<ExtArgs>>): Prisma__IndexerMetaClient<$Result.GetResult<Prisma.$IndexerMetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IndexerMeta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndexerMetaFindUniqueOrThrowArgs} args - Arguments to find a IndexerMeta
     * @example
     * // Get one IndexerMeta
     * const indexerMeta = await prisma.indexerMeta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndexerMetaFindUniqueOrThrowArgs>(args: SelectSubset<T, IndexerMetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndexerMetaClient<$Result.GetResult<Prisma.$IndexerMetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndexerMeta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexerMetaFindFirstArgs} args - Arguments to find a IndexerMeta
     * @example
     * // Get one IndexerMeta
     * const indexerMeta = await prisma.indexerMeta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndexerMetaFindFirstArgs>(args?: SelectSubset<T, IndexerMetaFindFirstArgs<ExtArgs>>): Prisma__IndexerMetaClient<$Result.GetResult<Prisma.$IndexerMetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndexerMeta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexerMetaFindFirstOrThrowArgs} args - Arguments to find a IndexerMeta
     * @example
     * // Get one IndexerMeta
     * const indexerMeta = await prisma.indexerMeta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndexerMetaFindFirstOrThrowArgs>(args?: SelectSubset<T, IndexerMetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndexerMetaClient<$Result.GetResult<Prisma.$IndexerMetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IndexerMetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexerMetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IndexerMetas
     * const indexerMetas = await prisma.indexerMeta.findMany()
     * 
     * // Get first 10 IndexerMetas
     * const indexerMetas = await prisma.indexerMeta.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const indexerMetaWithKeyOnly = await prisma.indexerMeta.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends IndexerMetaFindManyArgs>(args?: SelectSubset<T, IndexerMetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexerMetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IndexerMeta.
     * @param {IndexerMetaCreateArgs} args - Arguments to create a IndexerMeta.
     * @example
     * // Create one IndexerMeta
     * const IndexerMeta = await prisma.indexerMeta.create({
     *   data: {
     *     // ... data to create a IndexerMeta
     *   }
     * })
     * 
     */
    create<T extends IndexerMetaCreateArgs>(args: SelectSubset<T, IndexerMetaCreateArgs<ExtArgs>>): Prisma__IndexerMetaClient<$Result.GetResult<Prisma.$IndexerMetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IndexerMetas.
     * @param {IndexerMetaCreateManyArgs} args - Arguments to create many IndexerMetas.
     * @example
     * // Create many IndexerMetas
     * const indexerMeta = await prisma.indexerMeta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndexerMetaCreateManyArgs>(args?: SelectSubset<T, IndexerMetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IndexerMetas and returns the data saved in the database.
     * @param {IndexerMetaCreateManyAndReturnArgs} args - Arguments to create many IndexerMetas.
     * @example
     * // Create many IndexerMetas
     * const indexerMeta = await prisma.indexerMeta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IndexerMetas and only return the `key`
     * const indexerMetaWithKeyOnly = await prisma.indexerMeta.createManyAndReturn({
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndexerMetaCreateManyAndReturnArgs>(args?: SelectSubset<T, IndexerMetaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexerMetaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IndexerMeta.
     * @param {IndexerMetaDeleteArgs} args - Arguments to delete one IndexerMeta.
     * @example
     * // Delete one IndexerMeta
     * const IndexerMeta = await prisma.indexerMeta.delete({
     *   where: {
     *     // ... filter to delete one IndexerMeta
     *   }
     * })
     * 
     */
    delete<T extends IndexerMetaDeleteArgs>(args: SelectSubset<T, IndexerMetaDeleteArgs<ExtArgs>>): Prisma__IndexerMetaClient<$Result.GetResult<Prisma.$IndexerMetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IndexerMeta.
     * @param {IndexerMetaUpdateArgs} args - Arguments to update one IndexerMeta.
     * @example
     * // Update one IndexerMeta
     * const indexerMeta = await prisma.indexerMeta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndexerMetaUpdateArgs>(args: SelectSubset<T, IndexerMetaUpdateArgs<ExtArgs>>): Prisma__IndexerMetaClient<$Result.GetResult<Prisma.$IndexerMetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IndexerMetas.
     * @param {IndexerMetaDeleteManyArgs} args - Arguments to filter IndexerMetas to delete.
     * @example
     * // Delete a few IndexerMetas
     * const { count } = await prisma.indexerMeta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndexerMetaDeleteManyArgs>(args?: SelectSubset<T, IndexerMetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndexerMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexerMetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IndexerMetas
     * const indexerMeta = await prisma.indexerMeta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndexerMetaUpdateManyArgs>(args: SelectSubset<T, IndexerMetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndexerMetas and returns the data updated in the database.
     * @param {IndexerMetaUpdateManyAndReturnArgs} args - Arguments to update many IndexerMetas.
     * @example
     * // Update many IndexerMetas
     * const indexerMeta = await prisma.indexerMeta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IndexerMetas and only return the `key`
     * const indexerMetaWithKeyOnly = await prisma.indexerMeta.updateManyAndReturn({
     *   select: { key: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IndexerMetaUpdateManyAndReturnArgs>(args: SelectSubset<T, IndexerMetaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexerMetaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IndexerMeta.
     * @param {IndexerMetaUpsertArgs} args - Arguments to update or create a IndexerMeta.
     * @example
     * // Update or create a IndexerMeta
     * const indexerMeta = await prisma.indexerMeta.upsert({
     *   create: {
     *     // ... data to create a IndexerMeta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IndexerMeta we want to update
     *   }
     * })
     */
    upsert<T extends IndexerMetaUpsertArgs>(args: SelectSubset<T, IndexerMetaUpsertArgs<ExtArgs>>): Prisma__IndexerMetaClient<$Result.GetResult<Prisma.$IndexerMetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IndexerMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexerMetaCountArgs} args - Arguments to filter IndexerMetas to count.
     * @example
     * // Count the number of IndexerMetas
     * const count = await prisma.indexerMeta.count({
     *   where: {
     *     // ... the filter for the IndexerMetas we want to count
     *   }
     * })
    **/
    count<T extends IndexerMetaCountArgs>(
      args?: Subset<T, IndexerMetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndexerMetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IndexerMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexerMetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IndexerMetaAggregateArgs>(args: Subset<T, IndexerMetaAggregateArgs>): Prisma.PrismaPromise<GetIndexerMetaAggregateType<T>>

    /**
     * Group by IndexerMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexerMetaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IndexerMetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndexerMetaGroupByArgs['orderBy'] }
        : { orderBy?: IndexerMetaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IndexerMetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndexerMetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IndexerMeta model
   */
  readonly fields: IndexerMetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IndexerMeta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndexerMetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IndexerMeta model
   */
  interface IndexerMetaFieldRefs {
    readonly key: FieldRef<"IndexerMeta", 'String'>
    readonly value: FieldRef<"IndexerMeta", 'String'>
    readonly createdAt: FieldRef<"IndexerMeta", 'DateTime'>
    readonly updatedAt: FieldRef<"IndexerMeta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IndexerMeta findUnique
   */
  export type IndexerMetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexerMeta
     */
    select?: IndexerMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexerMeta
     */
    omit?: IndexerMetaOmit<ExtArgs> | null
    /**
     * Filter, which IndexerMeta to fetch.
     */
    where: IndexerMetaWhereUniqueInput
  }

  /**
   * IndexerMeta findUniqueOrThrow
   */
  export type IndexerMetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexerMeta
     */
    select?: IndexerMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexerMeta
     */
    omit?: IndexerMetaOmit<ExtArgs> | null
    /**
     * Filter, which IndexerMeta to fetch.
     */
    where: IndexerMetaWhereUniqueInput
  }

  /**
   * IndexerMeta findFirst
   */
  export type IndexerMetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexerMeta
     */
    select?: IndexerMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexerMeta
     */
    omit?: IndexerMetaOmit<ExtArgs> | null
    /**
     * Filter, which IndexerMeta to fetch.
     */
    where?: IndexerMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexerMetas to fetch.
     */
    orderBy?: IndexerMetaOrderByWithRelationInput | IndexerMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndexerMetas.
     */
    cursor?: IndexerMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexerMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexerMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndexerMetas.
     */
    distinct?: IndexerMetaScalarFieldEnum | IndexerMetaScalarFieldEnum[]
  }

  /**
   * IndexerMeta findFirstOrThrow
   */
  export type IndexerMetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexerMeta
     */
    select?: IndexerMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexerMeta
     */
    omit?: IndexerMetaOmit<ExtArgs> | null
    /**
     * Filter, which IndexerMeta to fetch.
     */
    where?: IndexerMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexerMetas to fetch.
     */
    orderBy?: IndexerMetaOrderByWithRelationInput | IndexerMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndexerMetas.
     */
    cursor?: IndexerMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexerMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexerMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndexerMetas.
     */
    distinct?: IndexerMetaScalarFieldEnum | IndexerMetaScalarFieldEnum[]
  }

  /**
   * IndexerMeta findMany
   */
  export type IndexerMetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexerMeta
     */
    select?: IndexerMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexerMeta
     */
    omit?: IndexerMetaOmit<ExtArgs> | null
    /**
     * Filter, which IndexerMetas to fetch.
     */
    where?: IndexerMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexerMetas to fetch.
     */
    orderBy?: IndexerMetaOrderByWithRelationInput | IndexerMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IndexerMetas.
     */
    cursor?: IndexerMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexerMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexerMetas.
     */
    skip?: number
    distinct?: IndexerMetaScalarFieldEnum | IndexerMetaScalarFieldEnum[]
  }

  /**
   * IndexerMeta create
   */
  export type IndexerMetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexerMeta
     */
    select?: IndexerMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexerMeta
     */
    omit?: IndexerMetaOmit<ExtArgs> | null
    /**
     * The data needed to create a IndexerMeta.
     */
    data: XOR<IndexerMetaCreateInput, IndexerMetaUncheckedCreateInput>
  }

  /**
   * IndexerMeta createMany
   */
  export type IndexerMetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IndexerMetas.
     */
    data: IndexerMetaCreateManyInput | IndexerMetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndexerMeta createManyAndReturn
   */
  export type IndexerMetaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexerMeta
     */
    select?: IndexerMetaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndexerMeta
     */
    omit?: IndexerMetaOmit<ExtArgs> | null
    /**
     * The data used to create many IndexerMetas.
     */
    data: IndexerMetaCreateManyInput | IndexerMetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndexerMeta update
   */
  export type IndexerMetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexerMeta
     */
    select?: IndexerMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexerMeta
     */
    omit?: IndexerMetaOmit<ExtArgs> | null
    /**
     * The data needed to update a IndexerMeta.
     */
    data: XOR<IndexerMetaUpdateInput, IndexerMetaUncheckedUpdateInput>
    /**
     * Choose, which IndexerMeta to update.
     */
    where: IndexerMetaWhereUniqueInput
  }

  /**
   * IndexerMeta updateMany
   */
  export type IndexerMetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IndexerMetas.
     */
    data: XOR<IndexerMetaUpdateManyMutationInput, IndexerMetaUncheckedUpdateManyInput>
    /**
     * Filter which IndexerMetas to update
     */
    where?: IndexerMetaWhereInput
    /**
     * Limit how many IndexerMetas to update.
     */
    limit?: number
  }

  /**
   * IndexerMeta updateManyAndReturn
   */
  export type IndexerMetaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexerMeta
     */
    select?: IndexerMetaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndexerMeta
     */
    omit?: IndexerMetaOmit<ExtArgs> | null
    /**
     * The data used to update IndexerMetas.
     */
    data: XOR<IndexerMetaUpdateManyMutationInput, IndexerMetaUncheckedUpdateManyInput>
    /**
     * Filter which IndexerMetas to update
     */
    where?: IndexerMetaWhereInput
    /**
     * Limit how many IndexerMetas to update.
     */
    limit?: number
  }

  /**
   * IndexerMeta upsert
   */
  export type IndexerMetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexerMeta
     */
    select?: IndexerMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexerMeta
     */
    omit?: IndexerMetaOmit<ExtArgs> | null
    /**
     * The filter to search for the IndexerMeta to update in case it exists.
     */
    where: IndexerMetaWhereUniqueInput
    /**
     * In case the IndexerMeta found by the `where` argument doesn't exist, create a new IndexerMeta with this data.
     */
    create: XOR<IndexerMetaCreateInput, IndexerMetaUncheckedCreateInput>
    /**
     * In case the IndexerMeta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndexerMetaUpdateInput, IndexerMetaUncheckedUpdateInput>
  }

  /**
   * IndexerMeta delete
   */
  export type IndexerMetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexerMeta
     */
    select?: IndexerMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexerMeta
     */
    omit?: IndexerMetaOmit<ExtArgs> | null
    /**
     * Filter which IndexerMeta to delete.
     */
    where: IndexerMetaWhereUniqueInput
  }

  /**
   * IndexerMeta deleteMany
   */
  export type IndexerMetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndexerMetas to delete
     */
    where?: IndexerMetaWhereInput
    /**
     * Limit how many IndexerMetas to delete.
     */
    limit?: number
  }

  /**
   * IndexerMeta without action
   */
  export type IndexerMetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexerMeta
     */
    select?: IndexerMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexerMeta
     */
    omit?: IndexerMetaOmit<ExtArgs> | null
  }


  /**
   * Model ProcessedBlock
   */

  export type AggregateProcessedBlock = {
    _count: ProcessedBlockCountAggregateOutputType | null
    _avg: ProcessedBlockAvgAggregateOutputType | null
    _sum: ProcessedBlockSumAggregateOutputType | null
    _min: ProcessedBlockMinAggregateOutputType | null
    _max: ProcessedBlockMaxAggregateOutputType | null
  }

  export type ProcessedBlockAvgAggregateOutputType = {
    blockNumber: number | null
  }

  export type ProcessedBlockSumAggregateOutputType = {
    blockNumber: number | null
  }

  export type ProcessedBlockMinAggregateOutputType = {
    blockNumber: number | null
    blockHash: string | null
    processedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProcessedBlockMaxAggregateOutputType = {
    blockNumber: number | null
    blockHash: string | null
    processedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProcessedBlockCountAggregateOutputType = {
    blockNumber: number
    blockHash: number
    processedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProcessedBlockAvgAggregateInputType = {
    blockNumber?: true
  }

  export type ProcessedBlockSumAggregateInputType = {
    blockNumber?: true
  }

  export type ProcessedBlockMinAggregateInputType = {
    blockNumber?: true
    blockHash?: true
    processedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProcessedBlockMaxAggregateInputType = {
    blockNumber?: true
    blockHash?: true
    processedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProcessedBlockCountAggregateInputType = {
    blockNumber?: true
    blockHash?: true
    processedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProcessedBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessedBlock to aggregate.
     */
    where?: ProcessedBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessedBlocks to fetch.
     */
    orderBy?: ProcessedBlockOrderByWithRelationInput | ProcessedBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcessedBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessedBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessedBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProcessedBlocks
    **/
    _count?: true | ProcessedBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProcessedBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProcessedBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessedBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessedBlockMaxAggregateInputType
  }

  export type GetProcessedBlockAggregateType<T extends ProcessedBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateProcessedBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcessedBlock[P]>
      : GetScalarType<T[P], AggregateProcessedBlock[P]>
  }




  export type ProcessedBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessedBlockWhereInput
    orderBy?: ProcessedBlockOrderByWithAggregationInput | ProcessedBlockOrderByWithAggregationInput[]
    by: ProcessedBlockScalarFieldEnum[] | ProcessedBlockScalarFieldEnum
    having?: ProcessedBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessedBlockCountAggregateInputType | true
    _avg?: ProcessedBlockAvgAggregateInputType
    _sum?: ProcessedBlockSumAggregateInputType
    _min?: ProcessedBlockMinAggregateInputType
    _max?: ProcessedBlockMaxAggregateInputType
  }

  export type ProcessedBlockGroupByOutputType = {
    blockNumber: number
    blockHash: string
    processedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: ProcessedBlockCountAggregateOutputType | null
    _avg: ProcessedBlockAvgAggregateOutputType | null
    _sum: ProcessedBlockSumAggregateOutputType | null
    _min: ProcessedBlockMinAggregateOutputType | null
    _max: ProcessedBlockMaxAggregateOutputType | null
  }

  type GetProcessedBlockGroupByPayload<T extends ProcessedBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcessedBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessedBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessedBlockGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessedBlockGroupByOutputType[P]>
        }
      >
    >


  export type ProcessedBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    blockNumber?: boolean
    blockHash?: boolean
    processedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["processedBlock"]>

  export type ProcessedBlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    blockNumber?: boolean
    blockHash?: boolean
    processedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["processedBlock"]>

  export type ProcessedBlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    blockNumber?: boolean
    blockHash?: boolean
    processedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["processedBlock"]>

  export type ProcessedBlockSelectScalar = {
    blockNumber?: boolean
    blockHash?: boolean
    processedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProcessedBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"blockNumber" | "blockHash" | "processedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["processedBlock"]>

  export type $ProcessedBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProcessedBlock"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      blockNumber: number
      blockHash: string
      processedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["processedBlock"]>
    composites: {}
  }

  type ProcessedBlockGetPayload<S extends boolean | null | undefined | ProcessedBlockDefaultArgs> = $Result.GetResult<Prisma.$ProcessedBlockPayload, S>

  type ProcessedBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcessedBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcessedBlockCountAggregateInputType | true
    }

  export interface ProcessedBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProcessedBlock'], meta: { name: 'ProcessedBlock' } }
    /**
     * Find zero or one ProcessedBlock that matches the filter.
     * @param {ProcessedBlockFindUniqueArgs} args - Arguments to find a ProcessedBlock
     * @example
     * // Get one ProcessedBlock
     * const processedBlock = await prisma.processedBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessedBlockFindUniqueArgs>(args: SelectSubset<T, ProcessedBlockFindUniqueArgs<ExtArgs>>): Prisma__ProcessedBlockClient<$Result.GetResult<Prisma.$ProcessedBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProcessedBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessedBlockFindUniqueOrThrowArgs} args - Arguments to find a ProcessedBlock
     * @example
     * // Get one ProcessedBlock
     * const processedBlock = await prisma.processedBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessedBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessedBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessedBlockClient<$Result.GetResult<Prisma.$ProcessedBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessedBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedBlockFindFirstArgs} args - Arguments to find a ProcessedBlock
     * @example
     * // Get one ProcessedBlock
     * const processedBlock = await prisma.processedBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessedBlockFindFirstArgs>(args?: SelectSubset<T, ProcessedBlockFindFirstArgs<ExtArgs>>): Prisma__ProcessedBlockClient<$Result.GetResult<Prisma.$ProcessedBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessedBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedBlockFindFirstOrThrowArgs} args - Arguments to find a ProcessedBlock
     * @example
     * // Get one ProcessedBlock
     * const processedBlock = await prisma.processedBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessedBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessedBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessedBlockClient<$Result.GetResult<Prisma.$ProcessedBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProcessedBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProcessedBlocks
     * const processedBlocks = await prisma.processedBlock.findMany()
     * 
     * // Get first 10 ProcessedBlocks
     * const processedBlocks = await prisma.processedBlock.findMany({ take: 10 })
     * 
     * // Only select the `blockNumber`
     * const processedBlockWithBlockNumberOnly = await prisma.processedBlock.findMany({ select: { blockNumber: true } })
     * 
     */
    findMany<T extends ProcessedBlockFindManyArgs>(args?: SelectSubset<T, ProcessedBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessedBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProcessedBlock.
     * @param {ProcessedBlockCreateArgs} args - Arguments to create a ProcessedBlock.
     * @example
     * // Create one ProcessedBlock
     * const ProcessedBlock = await prisma.processedBlock.create({
     *   data: {
     *     // ... data to create a ProcessedBlock
     *   }
     * })
     * 
     */
    create<T extends ProcessedBlockCreateArgs>(args: SelectSubset<T, ProcessedBlockCreateArgs<ExtArgs>>): Prisma__ProcessedBlockClient<$Result.GetResult<Prisma.$ProcessedBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProcessedBlocks.
     * @param {ProcessedBlockCreateManyArgs} args - Arguments to create many ProcessedBlocks.
     * @example
     * // Create many ProcessedBlocks
     * const processedBlock = await prisma.processedBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcessedBlockCreateManyArgs>(args?: SelectSubset<T, ProcessedBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProcessedBlocks and returns the data saved in the database.
     * @param {ProcessedBlockCreateManyAndReturnArgs} args - Arguments to create many ProcessedBlocks.
     * @example
     * // Create many ProcessedBlocks
     * const processedBlock = await prisma.processedBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProcessedBlocks and only return the `blockNumber`
     * const processedBlockWithBlockNumberOnly = await prisma.processedBlock.createManyAndReturn({
     *   select: { blockNumber: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProcessedBlockCreateManyAndReturnArgs>(args?: SelectSubset<T, ProcessedBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessedBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProcessedBlock.
     * @param {ProcessedBlockDeleteArgs} args - Arguments to delete one ProcessedBlock.
     * @example
     * // Delete one ProcessedBlock
     * const ProcessedBlock = await prisma.processedBlock.delete({
     *   where: {
     *     // ... filter to delete one ProcessedBlock
     *   }
     * })
     * 
     */
    delete<T extends ProcessedBlockDeleteArgs>(args: SelectSubset<T, ProcessedBlockDeleteArgs<ExtArgs>>): Prisma__ProcessedBlockClient<$Result.GetResult<Prisma.$ProcessedBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProcessedBlock.
     * @param {ProcessedBlockUpdateArgs} args - Arguments to update one ProcessedBlock.
     * @example
     * // Update one ProcessedBlock
     * const processedBlock = await prisma.processedBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcessedBlockUpdateArgs>(args: SelectSubset<T, ProcessedBlockUpdateArgs<ExtArgs>>): Prisma__ProcessedBlockClient<$Result.GetResult<Prisma.$ProcessedBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProcessedBlocks.
     * @param {ProcessedBlockDeleteManyArgs} args - Arguments to filter ProcessedBlocks to delete.
     * @example
     * // Delete a few ProcessedBlocks
     * const { count } = await prisma.processedBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcessedBlockDeleteManyArgs>(args?: SelectSubset<T, ProcessedBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessedBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProcessedBlocks
     * const processedBlock = await prisma.processedBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcessedBlockUpdateManyArgs>(args: SelectSubset<T, ProcessedBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessedBlocks and returns the data updated in the database.
     * @param {ProcessedBlockUpdateManyAndReturnArgs} args - Arguments to update many ProcessedBlocks.
     * @example
     * // Update many ProcessedBlocks
     * const processedBlock = await prisma.processedBlock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProcessedBlocks and only return the `blockNumber`
     * const processedBlockWithBlockNumberOnly = await prisma.processedBlock.updateManyAndReturn({
     *   select: { blockNumber: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProcessedBlockUpdateManyAndReturnArgs>(args: SelectSubset<T, ProcessedBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessedBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProcessedBlock.
     * @param {ProcessedBlockUpsertArgs} args - Arguments to update or create a ProcessedBlock.
     * @example
     * // Update or create a ProcessedBlock
     * const processedBlock = await prisma.processedBlock.upsert({
     *   create: {
     *     // ... data to create a ProcessedBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProcessedBlock we want to update
     *   }
     * })
     */
    upsert<T extends ProcessedBlockUpsertArgs>(args: SelectSubset<T, ProcessedBlockUpsertArgs<ExtArgs>>): Prisma__ProcessedBlockClient<$Result.GetResult<Prisma.$ProcessedBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProcessedBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedBlockCountArgs} args - Arguments to filter ProcessedBlocks to count.
     * @example
     * // Count the number of ProcessedBlocks
     * const count = await prisma.processedBlock.count({
     *   where: {
     *     // ... the filter for the ProcessedBlocks we want to count
     *   }
     * })
    **/
    count<T extends ProcessedBlockCountArgs>(
      args?: Subset<T, ProcessedBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessedBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProcessedBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProcessedBlockAggregateArgs>(args: Subset<T, ProcessedBlockAggregateArgs>): Prisma.PrismaPromise<GetProcessedBlockAggregateType<T>>

    /**
     * Group by ProcessedBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedBlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProcessedBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessedBlockGroupByArgs['orderBy'] }
        : { orderBy?: ProcessedBlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProcessedBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessedBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProcessedBlock model
   */
  readonly fields: ProcessedBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProcessedBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcessedBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProcessedBlock model
   */
  interface ProcessedBlockFieldRefs {
    readonly blockNumber: FieldRef<"ProcessedBlock", 'Int'>
    readonly blockHash: FieldRef<"ProcessedBlock", 'String'>
    readonly processedAt: FieldRef<"ProcessedBlock", 'DateTime'>
    readonly createdAt: FieldRef<"ProcessedBlock", 'DateTime'>
    readonly updatedAt: FieldRef<"ProcessedBlock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProcessedBlock findUnique
   */
  export type ProcessedBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedBlock
     */
    select?: ProcessedBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedBlock
     */
    omit?: ProcessedBlockOmit<ExtArgs> | null
    /**
     * Filter, which ProcessedBlock to fetch.
     */
    where: ProcessedBlockWhereUniqueInput
  }

  /**
   * ProcessedBlock findUniqueOrThrow
   */
  export type ProcessedBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedBlock
     */
    select?: ProcessedBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedBlock
     */
    omit?: ProcessedBlockOmit<ExtArgs> | null
    /**
     * Filter, which ProcessedBlock to fetch.
     */
    where: ProcessedBlockWhereUniqueInput
  }

  /**
   * ProcessedBlock findFirst
   */
  export type ProcessedBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedBlock
     */
    select?: ProcessedBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedBlock
     */
    omit?: ProcessedBlockOmit<ExtArgs> | null
    /**
     * Filter, which ProcessedBlock to fetch.
     */
    where?: ProcessedBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessedBlocks to fetch.
     */
    orderBy?: ProcessedBlockOrderByWithRelationInput | ProcessedBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessedBlocks.
     */
    cursor?: ProcessedBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessedBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessedBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessedBlocks.
     */
    distinct?: ProcessedBlockScalarFieldEnum | ProcessedBlockScalarFieldEnum[]
  }

  /**
   * ProcessedBlock findFirstOrThrow
   */
  export type ProcessedBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedBlock
     */
    select?: ProcessedBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedBlock
     */
    omit?: ProcessedBlockOmit<ExtArgs> | null
    /**
     * Filter, which ProcessedBlock to fetch.
     */
    where?: ProcessedBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessedBlocks to fetch.
     */
    orderBy?: ProcessedBlockOrderByWithRelationInput | ProcessedBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessedBlocks.
     */
    cursor?: ProcessedBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessedBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessedBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessedBlocks.
     */
    distinct?: ProcessedBlockScalarFieldEnum | ProcessedBlockScalarFieldEnum[]
  }

  /**
   * ProcessedBlock findMany
   */
  export type ProcessedBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedBlock
     */
    select?: ProcessedBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedBlock
     */
    omit?: ProcessedBlockOmit<ExtArgs> | null
    /**
     * Filter, which ProcessedBlocks to fetch.
     */
    where?: ProcessedBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessedBlocks to fetch.
     */
    orderBy?: ProcessedBlockOrderByWithRelationInput | ProcessedBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProcessedBlocks.
     */
    cursor?: ProcessedBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessedBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessedBlocks.
     */
    skip?: number
    distinct?: ProcessedBlockScalarFieldEnum | ProcessedBlockScalarFieldEnum[]
  }

  /**
   * ProcessedBlock create
   */
  export type ProcessedBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedBlock
     */
    select?: ProcessedBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedBlock
     */
    omit?: ProcessedBlockOmit<ExtArgs> | null
    /**
     * The data needed to create a ProcessedBlock.
     */
    data: XOR<ProcessedBlockCreateInput, ProcessedBlockUncheckedCreateInput>
  }

  /**
   * ProcessedBlock createMany
   */
  export type ProcessedBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProcessedBlocks.
     */
    data: ProcessedBlockCreateManyInput | ProcessedBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProcessedBlock createManyAndReturn
   */
  export type ProcessedBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedBlock
     */
    select?: ProcessedBlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedBlock
     */
    omit?: ProcessedBlockOmit<ExtArgs> | null
    /**
     * The data used to create many ProcessedBlocks.
     */
    data: ProcessedBlockCreateManyInput | ProcessedBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProcessedBlock update
   */
  export type ProcessedBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedBlock
     */
    select?: ProcessedBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedBlock
     */
    omit?: ProcessedBlockOmit<ExtArgs> | null
    /**
     * The data needed to update a ProcessedBlock.
     */
    data: XOR<ProcessedBlockUpdateInput, ProcessedBlockUncheckedUpdateInput>
    /**
     * Choose, which ProcessedBlock to update.
     */
    where: ProcessedBlockWhereUniqueInput
  }

  /**
   * ProcessedBlock updateMany
   */
  export type ProcessedBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProcessedBlocks.
     */
    data: XOR<ProcessedBlockUpdateManyMutationInput, ProcessedBlockUncheckedUpdateManyInput>
    /**
     * Filter which ProcessedBlocks to update
     */
    where?: ProcessedBlockWhereInput
    /**
     * Limit how many ProcessedBlocks to update.
     */
    limit?: number
  }

  /**
   * ProcessedBlock updateManyAndReturn
   */
  export type ProcessedBlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedBlock
     */
    select?: ProcessedBlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedBlock
     */
    omit?: ProcessedBlockOmit<ExtArgs> | null
    /**
     * The data used to update ProcessedBlocks.
     */
    data: XOR<ProcessedBlockUpdateManyMutationInput, ProcessedBlockUncheckedUpdateManyInput>
    /**
     * Filter which ProcessedBlocks to update
     */
    where?: ProcessedBlockWhereInput
    /**
     * Limit how many ProcessedBlocks to update.
     */
    limit?: number
  }

  /**
   * ProcessedBlock upsert
   */
  export type ProcessedBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedBlock
     */
    select?: ProcessedBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedBlock
     */
    omit?: ProcessedBlockOmit<ExtArgs> | null
    /**
     * The filter to search for the ProcessedBlock to update in case it exists.
     */
    where: ProcessedBlockWhereUniqueInput
    /**
     * In case the ProcessedBlock found by the `where` argument doesn't exist, create a new ProcessedBlock with this data.
     */
    create: XOR<ProcessedBlockCreateInput, ProcessedBlockUncheckedCreateInput>
    /**
     * In case the ProcessedBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessedBlockUpdateInput, ProcessedBlockUncheckedUpdateInput>
  }

  /**
   * ProcessedBlock delete
   */
  export type ProcessedBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedBlock
     */
    select?: ProcessedBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedBlock
     */
    omit?: ProcessedBlockOmit<ExtArgs> | null
    /**
     * Filter which ProcessedBlock to delete.
     */
    where: ProcessedBlockWhereUniqueInput
  }

  /**
   * ProcessedBlock deleteMany
   */
  export type ProcessedBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessedBlocks to delete
     */
    where?: ProcessedBlockWhereInput
    /**
     * Limit how many ProcessedBlocks to delete.
     */
    limit?: number
  }

  /**
   * ProcessedBlock without action
   */
  export type ProcessedBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedBlock
     */
    select?: ProcessedBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedBlock
     */
    omit?: ProcessedBlockOmit<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    logIndex: number | null
    blockNumber: number | null
  }

  export type OrderSumAggregateOutputType = {
    logIndex: number | null
    blockNumber: number | null
  }

  export type OrderMinAggregateOutputType = {
    orderHash: string | null
    txHash: string | null
    logIndex: number | null
    blockNumber: number | null
    status: $Enums.Status | null
    isConfirmed: boolean | null
    isOrphaned: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    orderHash: string | null
    txHash: string | null
    logIndex: number | null
    blockNumber: number | null
    status: $Enums.Status | null
    isConfirmed: boolean | null
    isOrphaned: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    orderHash: number
    txHash: number
    logIndex: number
    blockNumber: number
    status: number
    isConfirmed: number
    isOrphaned: number
    rawOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    logIndex?: true
    blockNumber?: true
  }

  export type OrderSumAggregateInputType = {
    logIndex?: true
    blockNumber?: true
  }

  export type OrderMinAggregateInputType = {
    orderHash?: true
    txHash?: true
    logIndex?: true
    blockNumber?: true
    status?: true
    isConfirmed?: true
    isOrphaned?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    orderHash?: true
    txHash?: true
    logIndex?: true
    blockNumber?: true
    status?: true
    isConfirmed?: true
    isOrphaned?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    orderHash?: true
    txHash?: true
    logIndex?: true
    blockNumber?: true
    status?: true
    isConfirmed?: true
    isOrphaned?: true
    rawOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    orderHash: string
    txHash: string | null
    logIndex: number | null
    blockNumber: number | null
    status: $Enums.Status | null
    isConfirmed: boolean
    isOrphaned: boolean
    rawOrder: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderHash?: boolean
    txHash?: boolean
    logIndex?: boolean
    blockNumber?: boolean
    status?: boolean
    isConfirmed?: boolean
    isOrphaned?: boolean
    rawOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderHash?: boolean
    txHash?: boolean
    logIndex?: boolean
    blockNumber?: boolean
    status?: boolean
    isConfirmed?: boolean
    isOrphaned?: boolean
    rawOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderHash?: boolean
    txHash?: boolean
    logIndex?: boolean
    blockNumber?: boolean
    status?: boolean
    isConfirmed?: boolean
    isOrphaned?: boolean
    rawOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    orderHash?: boolean
    txHash?: boolean
    logIndex?: boolean
    blockNumber?: boolean
    status?: boolean
    isConfirmed?: boolean
    isOrphaned?: boolean
    rawOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"orderHash" | "txHash" | "logIndex" | "blockNumber" | "status" | "isConfirmed" | "isOrphaned" | "rawOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      orderHash: string
      txHash: string | null
      logIndex: number | null
      blockNumber: number | null
      status: $Enums.Status | null
      isConfirmed: boolean
      isOrphaned: boolean
      rawOrder: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `orderHash`
     * const orderWithOrderHashOnly = await prisma.order.findMany({ select: { orderHash: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `orderHash`
     * const orderWithOrderHashOnly = await prisma.order.createManyAndReturn({
     *   select: { orderHash: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `orderHash`
     * const orderWithOrderHashOnly = await prisma.order.updateManyAndReturn({
     *   select: { orderHash: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly orderHash: FieldRef<"Order", 'String'>
    readonly txHash: FieldRef<"Order", 'String'>
    readonly logIndex: FieldRef<"Order", 'Int'>
    readonly blockNumber: FieldRef<"Order", 'Int'>
    readonly status: FieldRef<"Order", 'Status'>
    readonly isConfirmed: FieldRef<"Order", 'Boolean'>
    readonly isOrphaned: FieldRef<"Order", 'Boolean'>
    readonly rawOrder: FieldRef<"Order", 'Json'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProcessedEventScalarFieldEnum: {
    eventId: 'eventId',
    txHash: 'txHash',
    logIndex: 'logIndex',
    eventType: 'eventType',
    createdAt: 'createdAt'
  };

  export type ProcessedEventScalarFieldEnum = (typeof ProcessedEventScalarFieldEnum)[keyof typeof ProcessedEventScalarFieldEnum]


  export const IndexerMetaScalarFieldEnum: {
    key: 'key',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IndexerMetaScalarFieldEnum = (typeof IndexerMetaScalarFieldEnum)[keyof typeof IndexerMetaScalarFieldEnum]


  export const ProcessedBlockScalarFieldEnum: {
    blockNumber: 'blockNumber',
    blockHash: 'blockHash',
    processedAt: 'processedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProcessedBlockScalarFieldEnum = (typeof ProcessedBlockScalarFieldEnum)[keyof typeof ProcessedBlockScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    orderHash: 'orderHash',
    txHash: 'txHash',
    logIndex: 'logIndex',
    blockNumber: 'blockNumber',
    status: 'status',
    isConfirmed: 'isConfirmed',
    isOrphaned: 'isOrphaned',
    rawOrder: 'rawOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProcessedEventWhereInput = {
    AND?: ProcessedEventWhereInput | ProcessedEventWhereInput[]
    OR?: ProcessedEventWhereInput[]
    NOT?: ProcessedEventWhereInput | ProcessedEventWhereInput[]
    eventId?: StringFilter<"ProcessedEvent"> | string
    txHash?: StringFilter<"ProcessedEvent"> | string
    logIndex?: IntFilter<"ProcessedEvent"> | number
    eventType?: StringFilter<"ProcessedEvent"> | string
    createdAt?: DateTimeFilter<"ProcessedEvent"> | Date | string
  }

  export type ProcessedEventOrderByWithRelationInput = {
    eventId?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
  }

  export type ProcessedEventWhereUniqueInput = Prisma.AtLeast<{
    eventId?: string
    AND?: ProcessedEventWhereInput | ProcessedEventWhereInput[]
    OR?: ProcessedEventWhereInput[]
    NOT?: ProcessedEventWhereInput | ProcessedEventWhereInput[]
    txHash?: StringFilter<"ProcessedEvent"> | string
    logIndex?: IntFilter<"ProcessedEvent"> | number
    eventType?: StringFilter<"ProcessedEvent"> | string
    createdAt?: DateTimeFilter<"ProcessedEvent"> | Date | string
  }, "eventId">

  export type ProcessedEventOrderByWithAggregationInput = {
    eventId?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
    _count?: ProcessedEventCountOrderByAggregateInput
    _avg?: ProcessedEventAvgOrderByAggregateInput
    _max?: ProcessedEventMaxOrderByAggregateInput
    _min?: ProcessedEventMinOrderByAggregateInput
    _sum?: ProcessedEventSumOrderByAggregateInput
  }

  export type ProcessedEventScalarWhereWithAggregatesInput = {
    AND?: ProcessedEventScalarWhereWithAggregatesInput | ProcessedEventScalarWhereWithAggregatesInput[]
    OR?: ProcessedEventScalarWhereWithAggregatesInput[]
    NOT?: ProcessedEventScalarWhereWithAggregatesInput | ProcessedEventScalarWhereWithAggregatesInput[]
    eventId?: StringWithAggregatesFilter<"ProcessedEvent"> | string
    txHash?: StringWithAggregatesFilter<"ProcessedEvent"> | string
    logIndex?: IntWithAggregatesFilter<"ProcessedEvent"> | number
    eventType?: StringWithAggregatesFilter<"ProcessedEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProcessedEvent"> | Date | string
  }

  export type IndexerMetaWhereInput = {
    AND?: IndexerMetaWhereInput | IndexerMetaWhereInput[]
    OR?: IndexerMetaWhereInput[]
    NOT?: IndexerMetaWhereInput | IndexerMetaWhereInput[]
    key?: StringFilter<"IndexerMeta"> | string
    value?: StringFilter<"IndexerMeta"> | string
    createdAt?: DateTimeFilter<"IndexerMeta"> | Date | string
    updatedAt?: DateTimeFilter<"IndexerMeta"> | Date | string
  }

  export type IndexerMetaOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IndexerMetaWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: IndexerMetaWhereInput | IndexerMetaWhereInput[]
    OR?: IndexerMetaWhereInput[]
    NOT?: IndexerMetaWhereInput | IndexerMetaWhereInput[]
    value?: StringFilter<"IndexerMeta"> | string
    createdAt?: DateTimeFilter<"IndexerMeta"> | Date | string
    updatedAt?: DateTimeFilter<"IndexerMeta"> | Date | string
  }, "key">

  export type IndexerMetaOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IndexerMetaCountOrderByAggregateInput
    _max?: IndexerMetaMaxOrderByAggregateInput
    _min?: IndexerMetaMinOrderByAggregateInput
  }

  export type IndexerMetaScalarWhereWithAggregatesInput = {
    AND?: IndexerMetaScalarWhereWithAggregatesInput | IndexerMetaScalarWhereWithAggregatesInput[]
    OR?: IndexerMetaScalarWhereWithAggregatesInput[]
    NOT?: IndexerMetaScalarWhereWithAggregatesInput | IndexerMetaScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"IndexerMeta"> | string
    value?: StringWithAggregatesFilter<"IndexerMeta"> | string
    createdAt?: DateTimeWithAggregatesFilter<"IndexerMeta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IndexerMeta"> | Date | string
  }

  export type ProcessedBlockWhereInput = {
    AND?: ProcessedBlockWhereInput | ProcessedBlockWhereInput[]
    OR?: ProcessedBlockWhereInput[]
    NOT?: ProcessedBlockWhereInput | ProcessedBlockWhereInput[]
    blockNumber?: IntFilter<"ProcessedBlock"> | number
    blockHash?: StringFilter<"ProcessedBlock"> | string
    processedAt?: DateTimeFilter<"ProcessedBlock"> | Date | string
    createdAt?: DateTimeFilter<"ProcessedBlock"> | Date | string
    updatedAt?: DateTimeFilter<"ProcessedBlock"> | Date | string
  }

  export type ProcessedBlockOrderByWithRelationInput = {
    blockNumber?: SortOrder
    blockHash?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcessedBlockWhereUniqueInput = Prisma.AtLeast<{
    blockNumber?: number
    AND?: ProcessedBlockWhereInput | ProcessedBlockWhereInput[]
    OR?: ProcessedBlockWhereInput[]
    NOT?: ProcessedBlockWhereInput | ProcessedBlockWhereInput[]
    blockHash?: StringFilter<"ProcessedBlock"> | string
    processedAt?: DateTimeFilter<"ProcessedBlock"> | Date | string
    createdAt?: DateTimeFilter<"ProcessedBlock"> | Date | string
    updatedAt?: DateTimeFilter<"ProcessedBlock"> | Date | string
  }, "blockNumber">

  export type ProcessedBlockOrderByWithAggregationInput = {
    blockNumber?: SortOrder
    blockHash?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProcessedBlockCountOrderByAggregateInput
    _avg?: ProcessedBlockAvgOrderByAggregateInput
    _max?: ProcessedBlockMaxOrderByAggregateInput
    _min?: ProcessedBlockMinOrderByAggregateInput
    _sum?: ProcessedBlockSumOrderByAggregateInput
  }

  export type ProcessedBlockScalarWhereWithAggregatesInput = {
    AND?: ProcessedBlockScalarWhereWithAggregatesInput | ProcessedBlockScalarWhereWithAggregatesInput[]
    OR?: ProcessedBlockScalarWhereWithAggregatesInput[]
    NOT?: ProcessedBlockScalarWhereWithAggregatesInput | ProcessedBlockScalarWhereWithAggregatesInput[]
    blockNumber?: IntWithAggregatesFilter<"ProcessedBlock"> | number
    blockHash?: StringWithAggregatesFilter<"ProcessedBlock"> | string
    processedAt?: DateTimeWithAggregatesFilter<"ProcessedBlock"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ProcessedBlock"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProcessedBlock"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    orderHash?: StringFilter<"Order"> | string
    txHash?: StringNullableFilter<"Order"> | string | null
    logIndex?: IntNullableFilter<"Order"> | number | null
    blockNumber?: IntNullableFilter<"Order"> | number | null
    status?: EnumStatusNullableFilter<"Order"> | $Enums.Status | null
    isConfirmed?: BoolFilter<"Order"> | boolean
    isOrphaned?: BoolFilter<"Order"> | boolean
    rawOrder?: JsonNullableFilter<"Order">
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type OrderOrderByWithRelationInput = {
    orderHash?: SortOrder
    txHash?: SortOrderInput | SortOrder
    logIndex?: SortOrderInput | SortOrder
    blockNumber?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    isConfirmed?: SortOrder
    isOrphaned?: SortOrder
    rawOrder?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    orderHash?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    txHash?: StringNullableFilter<"Order"> | string | null
    logIndex?: IntNullableFilter<"Order"> | number | null
    blockNumber?: IntNullableFilter<"Order"> | number | null
    status?: EnumStatusNullableFilter<"Order"> | $Enums.Status | null
    isConfirmed?: BoolFilter<"Order"> | boolean
    isOrphaned?: BoolFilter<"Order"> | boolean
    rawOrder?: JsonNullableFilter<"Order">
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }, "orderHash">

  export type OrderOrderByWithAggregationInput = {
    orderHash?: SortOrder
    txHash?: SortOrderInput | SortOrder
    logIndex?: SortOrderInput | SortOrder
    blockNumber?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    isConfirmed?: SortOrder
    isOrphaned?: SortOrder
    rawOrder?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    orderHash?: StringWithAggregatesFilter<"Order"> | string
    txHash?: StringNullableWithAggregatesFilter<"Order"> | string | null
    logIndex?: IntNullableWithAggregatesFilter<"Order"> | number | null
    blockNumber?: IntNullableWithAggregatesFilter<"Order"> | number | null
    status?: EnumStatusNullableWithAggregatesFilter<"Order"> | $Enums.Status | null
    isConfirmed?: BoolWithAggregatesFilter<"Order"> | boolean
    isOrphaned?: BoolWithAggregatesFilter<"Order"> | boolean
    rawOrder?: JsonNullableWithAggregatesFilter<"Order">
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type ProcessedEventCreateInput = {
    eventId: string
    txHash: string
    logIndex: number
    eventType: string
    createdAt?: Date | string
  }

  export type ProcessedEventUncheckedCreateInput = {
    eventId: string
    txHash: string
    logIndex: number
    eventType: string
    createdAt?: Date | string
  }

  export type ProcessedEventUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessedEventUncheckedUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessedEventCreateManyInput = {
    eventId: string
    txHash: string
    logIndex: number
    eventType: string
    createdAt?: Date | string
  }

  export type ProcessedEventUpdateManyMutationInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessedEventUncheckedUpdateManyInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndexerMetaCreateInput = {
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndexerMetaUncheckedCreateInput = {
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndexerMetaUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndexerMetaUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndexerMetaCreateManyInput = {
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndexerMetaUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndexerMetaUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessedBlockCreateInput = {
    blockNumber: number
    blockHash: string
    processedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcessedBlockUncheckedCreateInput = {
    blockNumber: number
    blockHash: string
    processedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcessedBlockUpdateInput = {
    blockNumber?: IntFieldUpdateOperationsInput | number
    blockHash?: StringFieldUpdateOperationsInput | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessedBlockUncheckedUpdateInput = {
    blockNumber?: IntFieldUpdateOperationsInput | number
    blockHash?: StringFieldUpdateOperationsInput | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessedBlockCreateManyInput = {
    blockNumber: number
    blockHash: string
    processedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcessedBlockUpdateManyMutationInput = {
    blockNumber?: IntFieldUpdateOperationsInput | number
    blockHash?: StringFieldUpdateOperationsInput | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessedBlockUncheckedUpdateManyInput = {
    blockNumber?: IntFieldUpdateOperationsInput | number
    blockHash?: StringFieldUpdateOperationsInput | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    orderHash: string
    txHash?: string | null
    logIndex?: number | null
    blockNumber?: number | null
    status?: $Enums.Status | null
    isConfirmed?: boolean
    isOrphaned?: boolean
    rawOrder?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUncheckedCreateInput = {
    orderHash: string
    txHash?: string | null
    logIndex?: number | null
    blockNumber?: number | null
    status?: $Enums.Status | null
    isConfirmed?: boolean
    isOrphaned?: boolean
    rawOrder?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateInput = {
    orderHash?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    logIndex?: NullableIntFieldUpdateOperationsInput | number | null
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isOrphaned?: BoolFieldUpdateOperationsInput | boolean
    rawOrder?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateInput = {
    orderHash?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    logIndex?: NullableIntFieldUpdateOperationsInput | number | null
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isOrphaned?: BoolFieldUpdateOperationsInput | boolean
    rawOrder?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    orderHash: string
    txHash?: string | null
    logIndex?: number | null
    blockNumber?: number | null
    status?: $Enums.Status | null
    isConfirmed?: boolean
    isOrphaned?: boolean
    rawOrder?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    orderHash?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    logIndex?: NullableIntFieldUpdateOperationsInput | number | null
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isOrphaned?: BoolFieldUpdateOperationsInput | boolean
    rawOrder?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    orderHash?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    logIndex?: NullableIntFieldUpdateOperationsInput | number | null
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    isOrphaned?: BoolFieldUpdateOperationsInput | boolean
    rawOrder?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProcessedEventCountOrderByAggregateInput = {
    eventId?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
  }

  export type ProcessedEventAvgOrderByAggregateInput = {
    logIndex?: SortOrder
  }

  export type ProcessedEventMaxOrderByAggregateInput = {
    eventId?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
  }

  export type ProcessedEventMinOrderByAggregateInput = {
    eventId?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
  }

  export type ProcessedEventSumOrderByAggregateInput = {
    logIndex?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IndexerMetaCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IndexerMetaMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IndexerMetaMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcessedBlockCountOrderByAggregateInput = {
    blockNumber?: SortOrder
    blockHash?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcessedBlockAvgOrderByAggregateInput = {
    blockNumber?: SortOrder
  }

  export type ProcessedBlockMaxOrderByAggregateInput = {
    blockNumber?: SortOrder
    blockHash?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcessedBlockMinOrderByAggregateInput = {
    blockNumber?: SortOrder
    blockHash?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcessedBlockSumOrderByAggregateInput = {
    blockNumber?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusNullableFilter<$PrismaModel> | $Enums.Status | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderCountOrderByAggregateInput = {
    orderHash?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    blockNumber?: SortOrder
    status?: SortOrder
    isConfirmed?: SortOrder
    isOrphaned?: SortOrder
    rawOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    logIndex?: SortOrder
    blockNumber?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    orderHash?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    blockNumber?: SortOrder
    status?: SortOrder
    isConfirmed?: SortOrder
    isOrphaned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    orderHash?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    blockNumber?: SortOrder
    status?: SortOrder
    isConfirmed?: SortOrder
    isOrphaned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    logIndex?: SortOrder
    blockNumber?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.Status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusNullableFilter<$PrismaModel> | $Enums.Status | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.Status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}

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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model UserExercise
 * 
 */
export type UserExercise = $Result.DefaultSelection<Prisma.$UserExercisePayload>
/**
 * Model Protocol
 * 
 */
export type Protocol = $Result.DefaultSelection<Prisma.$ProtocolPayload>
/**
 * Model ProtocolDay
 * 
 */
export type ProtocolDay = $Result.DefaultSelection<Prisma.$ProtocolDayPayload>
/**
 * Model Workout
 * 
 */
export type Workout = $Result.DefaultSelection<Prisma.$WorkoutPayload>
/**
 * Model ExerciseRecord
 * 
 */
export type ExerciseRecord = $Result.DefaultSelection<Prisma.$ExerciseRecordPayload>
/**
 * Model ProtocolDayUserExercise
 * 
 */
export type ProtocolDayUserExercise = $Result.DefaultSelection<Prisma.$ProtocolDayUserExercisePayload>
/**
 * Model WeightRecord
 * 
 */
export type WeightRecord = $Result.DefaultSelection<Prisma.$WeightRecordPayload>
/**
 * Model WeightProgram
 * 
 */
export type WeightProgram = $Result.DefaultSelection<Prisma.$WeightProgramPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userExercise`: Exposes CRUD operations for the **UserExercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserExercises
    * const userExercises = await prisma.userExercise.findMany()
    * ```
    */
  get userExercise(): Prisma.UserExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.protocol`: Exposes CRUD operations for the **Protocol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Protocols
    * const protocols = await prisma.protocol.findMany()
    * ```
    */
  get protocol(): Prisma.ProtocolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.protocolDay`: Exposes CRUD operations for the **ProtocolDay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProtocolDays
    * const protocolDays = await prisma.protocolDay.findMany()
    * ```
    */
  get protocolDay(): Prisma.ProtocolDayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workout`: Exposes CRUD operations for the **Workout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workouts
    * const workouts = await prisma.workout.findMany()
    * ```
    */
  get workout(): Prisma.WorkoutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exerciseRecord`: Exposes CRUD operations for the **ExerciseRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExerciseRecords
    * const exerciseRecords = await prisma.exerciseRecord.findMany()
    * ```
    */
  get exerciseRecord(): Prisma.ExerciseRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.protocolDayUserExercise`: Exposes CRUD operations for the **ProtocolDayUserExercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProtocolDayUserExercises
    * const protocolDayUserExercises = await prisma.protocolDayUserExercise.findMany()
    * ```
    */
  get protocolDayUserExercise(): Prisma.ProtocolDayUserExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weightRecord`: Exposes CRUD operations for the **WeightRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeightRecords
    * const weightRecords = await prisma.weightRecord.findMany()
    * ```
    */
  get weightRecord(): Prisma.WeightRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weightProgram`: Exposes CRUD operations for the **WeightProgram** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeightPrograms
    * const weightPrograms = await prisma.weightProgram.findMany()
    * ```
    */
  get weightProgram(): Prisma.WeightProgramDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    Exercise: 'Exercise',
    UserExercise: 'UserExercise',
    Protocol: 'Protocol',
    ProtocolDay: 'ProtocolDay',
    Workout: 'Workout',
    ExerciseRecord: 'ExerciseRecord',
    ProtocolDayUserExercise: 'ProtocolDayUserExercise',
    WeightRecord: 'WeightRecord',
    WeightProgram: 'WeightProgram'
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
      modelProps: "user" | "exercise" | "userExercise" | "protocol" | "protocolDay" | "workout" | "exerciseRecord" | "protocolDayUserExercise" | "weightRecord" | "weightProgram"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      UserExercise: {
        payload: Prisma.$UserExercisePayload<ExtArgs>
        fields: Prisma.UserExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExercisePayload>
          }
          findFirst: {
            args: Prisma.UserExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExercisePayload>
          }
          findMany: {
            args: Prisma.UserExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExercisePayload>[]
          }
          create: {
            args: Prisma.UserExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExercisePayload>
          }
          createMany: {
            args: Prisma.UserExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExercisePayload>[]
          }
          delete: {
            args: Prisma.UserExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExercisePayload>
          }
          update: {
            args: Prisma.UserExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExercisePayload>
          }
          deleteMany: {
            args: Prisma.UserExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExercisePayload>[]
          }
          upsert: {
            args: Prisma.UserExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExercisePayload>
          }
          aggregate: {
            args: Prisma.UserExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserExercise>
          }
          groupBy: {
            args: Prisma.UserExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<UserExerciseCountAggregateOutputType> | number
          }
        }
      }
      Protocol: {
        payload: Prisma.$ProtocolPayload<ExtArgs>
        fields: Prisma.ProtocolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProtocolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProtocolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolPayload>
          }
          findFirst: {
            args: Prisma.ProtocolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProtocolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolPayload>
          }
          findMany: {
            args: Prisma.ProtocolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolPayload>[]
          }
          create: {
            args: Prisma.ProtocolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolPayload>
          }
          createMany: {
            args: Prisma.ProtocolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProtocolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolPayload>[]
          }
          delete: {
            args: Prisma.ProtocolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolPayload>
          }
          update: {
            args: Prisma.ProtocolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolPayload>
          }
          deleteMany: {
            args: Prisma.ProtocolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProtocolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProtocolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolPayload>[]
          }
          upsert: {
            args: Prisma.ProtocolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolPayload>
          }
          aggregate: {
            args: Prisma.ProtocolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProtocol>
          }
          groupBy: {
            args: Prisma.ProtocolGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProtocolGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProtocolCountArgs<ExtArgs>
            result: $Utils.Optional<ProtocolCountAggregateOutputType> | number
          }
        }
      }
      ProtocolDay: {
        payload: Prisma.$ProtocolDayPayload<ExtArgs>
        fields: Prisma.ProtocolDayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProtocolDayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolDayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProtocolDayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolDayPayload>
          }
          findFirst: {
            args: Prisma.ProtocolDayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolDayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProtocolDayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolDayPayload>
          }
          findMany: {
            args: Prisma.ProtocolDayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolDayPayload>[]
          }
          create: {
            args: Prisma.ProtocolDayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolDayPayload>
          }
          createMany: {
            args: Prisma.ProtocolDayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProtocolDayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolDayPayload>[]
          }
          delete: {
            args: Prisma.ProtocolDayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolDayPayload>
          }
          update: {
            args: Prisma.ProtocolDayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolDayPayload>
          }
          deleteMany: {
            args: Prisma.ProtocolDayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProtocolDayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProtocolDayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolDayPayload>[]
          }
          upsert: {
            args: Prisma.ProtocolDayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolDayPayload>
          }
          aggregate: {
            args: Prisma.ProtocolDayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProtocolDay>
          }
          groupBy: {
            args: Prisma.ProtocolDayGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProtocolDayGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProtocolDayCountArgs<ExtArgs>
            result: $Utils.Optional<ProtocolDayCountAggregateOutputType> | number
          }
        }
      }
      Workout: {
        payload: Prisma.$WorkoutPayload<ExtArgs>
        fields: Prisma.WorkoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findFirst: {
            args: Prisma.WorkoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findMany: {
            args: Prisma.WorkoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          create: {
            args: Prisma.WorkoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          createMany: {
            args: Prisma.WorkoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          delete: {
            args: Prisma.WorkoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          update: {
            args: Prisma.WorkoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          aggregate: {
            args: Prisma.WorkoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkout>
          }
          groupBy: {
            args: Prisma.WorkoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutCountAggregateOutputType> | number
          }
        }
      }
      ExerciseRecord: {
        payload: Prisma.$ExerciseRecordPayload<ExtArgs>
        fields: Prisma.ExerciseRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>
          }
          findFirst: {
            args: Prisma.ExerciseRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>
          }
          findMany: {
            args: Prisma.ExerciseRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>[]
          }
          create: {
            args: Prisma.ExerciseRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>
          }
          createMany: {
            args: Prisma.ExerciseRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>[]
          }
          delete: {
            args: Prisma.ExerciseRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>
          }
          update: {
            args: Prisma.ExerciseRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>
          }
          deleteMany: {
            args: Prisma.ExerciseRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>[]
          }
          upsert: {
            args: Prisma.ExerciseRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>
          }
          aggregate: {
            args: Prisma.ExerciseRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExerciseRecord>
          }
          groupBy: {
            args: Prisma.ExerciseRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseRecordCountAggregateOutputType> | number
          }
        }
      }
      ProtocolDayUserExercise: {
        payload: Prisma.$ProtocolDayUserExercisePayload<ExtArgs>
        fields: Prisma.ProtocolDayUserExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProtocolDayUserExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolDayUserExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProtocolDayUserExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolDayUserExercisePayload>
          }
          findFirst: {
            args: Prisma.ProtocolDayUserExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolDayUserExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProtocolDayUserExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolDayUserExercisePayload>
          }
          findMany: {
            args: Prisma.ProtocolDayUserExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolDayUserExercisePayload>[]
          }
          create: {
            args: Prisma.ProtocolDayUserExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolDayUserExercisePayload>
          }
          createMany: {
            args: Prisma.ProtocolDayUserExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProtocolDayUserExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolDayUserExercisePayload>[]
          }
          delete: {
            args: Prisma.ProtocolDayUserExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolDayUserExercisePayload>
          }
          update: {
            args: Prisma.ProtocolDayUserExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolDayUserExercisePayload>
          }
          deleteMany: {
            args: Prisma.ProtocolDayUserExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProtocolDayUserExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProtocolDayUserExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolDayUserExercisePayload>[]
          }
          upsert: {
            args: Prisma.ProtocolDayUserExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolDayUserExercisePayload>
          }
          aggregate: {
            args: Prisma.ProtocolDayUserExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProtocolDayUserExercise>
          }
          groupBy: {
            args: Prisma.ProtocolDayUserExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProtocolDayUserExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProtocolDayUserExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ProtocolDayUserExerciseCountAggregateOutputType> | number
          }
        }
      }
      WeightRecord: {
        payload: Prisma.$WeightRecordPayload<ExtArgs>
        fields: Prisma.WeightRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeightRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeightRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightRecordPayload>
          }
          findFirst: {
            args: Prisma.WeightRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeightRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightRecordPayload>
          }
          findMany: {
            args: Prisma.WeightRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightRecordPayload>[]
          }
          create: {
            args: Prisma.WeightRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightRecordPayload>
          }
          createMany: {
            args: Prisma.WeightRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeightRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightRecordPayload>[]
          }
          delete: {
            args: Prisma.WeightRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightRecordPayload>
          }
          update: {
            args: Prisma.WeightRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightRecordPayload>
          }
          deleteMany: {
            args: Prisma.WeightRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeightRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeightRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightRecordPayload>[]
          }
          upsert: {
            args: Prisma.WeightRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightRecordPayload>
          }
          aggregate: {
            args: Prisma.WeightRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeightRecord>
          }
          groupBy: {
            args: Prisma.WeightRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeightRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeightRecordCountArgs<ExtArgs>
            result: $Utils.Optional<WeightRecordCountAggregateOutputType> | number
          }
        }
      }
      WeightProgram: {
        payload: Prisma.$WeightProgramPayload<ExtArgs>
        fields: Prisma.WeightProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeightProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeightProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightProgramPayload>
          }
          findFirst: {
            args: Prisma.WeightProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeightProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightProgramPayload>
          }
          findMany: {
            args: Prisma.WeightProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightProgramPayload>[]
          }
          create: {
            args: Prisma.WeightProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightProgramPayload>
          }
          createMany: {
            args: Prisma.WeightProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeightProgramCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightProgramPayload>[]
          }
          delete: {
            args: Prisma.WeightProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightProgramPayload>
          }
          update: {
            args: Prisma.WeightProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightProgramPayload>
          }
          deleteMany: {
            args: Prisma.WeightProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeightProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeightProgramUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightProgramPayload>[]
          }
          upsert: {
            args: Prisma.WeightProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightProgramPayload>
          }
          aggregate: {
            args: Prisma.WeightProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeightProgram>
          }
          groupBy: {
            args: Prisma.WeightProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeightProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeightProgramCountArgs<ExtArgs>
            result: $Utils.Optional<WeightProgramCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    exercise?: ExerciseOmit
    userExercise?: UserExerciseOmit
    protocol?: ProtocolOmit
    protocolDay?: ProtocolDayOmit
    workout?: WorkoutOmit
    exerciseRecord?: ExerciseRecordOmit
    protocolDayUserExercise?: ProtocolDayUserExerciseOmit
    weightRecord?: WeightRecordOmit
    weightProgram?: WeightProgramOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userExcercises: number
    protocols: number
    weightPrograms: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userExcercises?: boolean | UserCountOutputTypeCountUserExcercisesArgs
    protocols?: boolean | UserCountOutputTypeCountProtocolsArgs
    weightPrograms?: boolean | UserCountOutputTypeCountWeightProgramsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserExcercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserExerciseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProtocolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProtocolWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWeightProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeightProgramWhereInput
  }


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    userExcercises: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userExcercises?: boolean | ExerciseCountOutputTypeCountUserExcercisesArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountUserExcercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserExerciseWhereInput
  }


  /**
   * Count Type UserExerciseCountOutputType
   */

  export type UserExerciseCountOutputType = {
    exerciseRecords: number
    protocolDayUserExercises: number
  }

  export type UserExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exerciseRecords?: boolean | UserExerciseCountOutputTypeCountExerciseRecordsArgs
    protocolDayUserExercises?: boolean | UserExerciseCountOutputTypeCountProtocolDayUserExercisesArgs
  }

  // Custom InputTypes
  /**
   * UserExerciseCountOutputType without action
   */
  export type UserExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExerciseCountOutputType
     */
    select?: UserExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserExerciseCountOutputType without action
   */
  export type UserExerciseCountOutputTypeCountExerciseRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseRecordWhereInput
  }

  /**
   * UserExerciseCountOutputType without action
   */
  export type UserExerciseCountOutputTypeCountProtocolDayUserExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProtocolDayUserExerciseWhereInput
  }


  /**
   * Count Type ProtocolCountOutputType
   */

  export type ProtocolCountOutputType = {
    protocolDays: number
  }

  export type ProtocolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    protocolDays?: boolean | ProtocolCountOutputTypeCountProtocolDaysArgs
  }

  // Custom InputTypes
  /**
   * ProtocolCountOutputType without action
   */
  export type ProtocolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolCountOutputType
     */
    select?: ProtocolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProtocolCountOutputType without action
   */
  export type ProtocolCountOutputTypeCountProtocolDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProtocolDayWhereInput
  }


  /**
   * Count Type ProtocolDayCountOutputType
   */

  export type ProtocolDayCountOutputType = {
    workouts: number
    protocolDayUserExercises: number
  }

  export type ProtocolDayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workouts?: boolean | ProtocolDayCountOutputTypeCountWorkoutsArgs
    protocolDayUserExercises?: boolean | ProtocolDayCountOutputTypeCountProtocolDayUserExercisesArgs
  }

  // Custom InputTypes
  /**
   * ProtocolDayCountOutputType without action
   */
  export type ProtocolDayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDayCountOutputType
     */
    select?: ProtocolDayCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProtocolDayCountOutputType without action
   */
  export type ProtocolDayCountOutputTypeCountWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
  }

  /**
   * ProtocolDayCountOutputType without action
   */
  export type ProtocolDayCountOutputTypeCountProtocolDayUserExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProtocolDayUserExerciseWhereInput
  }


  /**
   * Count Type WorkoutCountOutputType
   */

  export type WorkoutCountOutputType = {
    exerciseRecords: number
  }

  export type WorkoutCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exerciseRecords?: boolean | WorkoutCountOutputTypeCountExerciseRecordsArgs
  }

  // Custom InputTypes
  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCountOutputType
     */
    select?: WorkoutCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeCountExerciseRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseRecordWhereInput
  }


  /**
   * Count Type WeightProgramCountOutputType
   */

  export type WeightProgramCountOutputType = {
    weightRecords: number
  }

  export type WeightProgramCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weightRecords?: boolean | WeightProgramCountOutputTypeCountWeightRecordsArgs
  }

  // Custom InputTypes
  /**
   * WeightProgramCountOutputType without action
   */
  export type WeightProgramCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightProgramCountOutputType
     */
    select?: WeightProgramCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WeightProgramCountOutputType without action
   */
  export type WeightProgramCountOutputTypeCountWeightRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeightRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    weight: number | null
    height: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    weight: number | null
    height: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    createdAt: Date | null
    firstName: string | null
    lastName: string | null
    birthDate: Date | null
    gender: string | null
    weight: number | null
    height: number | null
    password: string | null
    measurementUnit: string | null
    exerciseWeightUnit: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    createdAt: Date | null
    firstName: string | null
    lastName: string | null
    birthDate: Date | null
    gender: string | null
    weight: number | null
    height: number | null
    password: string | null
    measurementUnit: string | null
    exerciseWeightUnit: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    firstName: number
    lastName: number
    birthDate: number
    gender: number
    weight: number
    height: number
    password: number
    measurementUnit: number
    exerciseWeightUnit: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    weight?: true
    height?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    weight?: true
    height?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    gender?: true
    weight?: true
    height?: true
    password?: true
    measurementUnit?: true
    exerciseWeightUnit?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    gender?: true
    weight?: true
    height?: true
    password?: true
    measurementUnit?: true
    exerciseWeightUnit?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    gender?: true
    weight?: true
    height?: true
    password?: true
    measurementUnit?: true
    exerciseWeightUnit?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    createdAt: Date
    firstName: string | null
    lastName: string | null
    birthDate: Date
    gender: string
    weight: number
    height: number
    password: string
    measurementUnit: string
    exerciseWeightUnit: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    gender?: boolean
    weight?: boolean
    height?: boolean
    password?: boolean
    measurementUnit?: boolean
    exerciseWeightUnit?: boolean
    userExcercises?: boolean | User$userExcercisesArgs<ExtArgs>
    protocols?: boolean | User$protocolsArgs<ExtArgs>
    weightPrograms?: boolean | User$weightProgramsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    gender?: boolean
    weight?: boolean
    height?: boolean
    password?: boolean
    measurementUnit?: boolean
    exerciseWeightUnit?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    gender?: boolean
    weight?: boolean
    height?: boolean
    password?: boolean
    measurementUnit?: boolean
    exerciseWeightUnit?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    gender?: boolean
    weight?: boolean
    height?: boolean
    password?: boolean
    measurementUnit?: boolean
    exerciseWeightUnit?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "createdAt" | "firstName" | "lastName" | "birthDate" | "gender" | "weight" | "height" | "password" | "measurementUnit" | "exerciseWeightUnit", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userExcercises?: boolean | User$userExcercisesArgs<ExtArgs>
    protocols?: boolean | User$protocolsArgs<ExtArgs>
    weightPrograms?: boolean | User$weightProgramsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userExcercises: Prisma.$UserExercisePayload<ExtArgs>[]
      protocols: Prisma.$ProtocolPayload<ExtArgs>[]
      weightPrograms: Prisma.$WeightProgramPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      createdAt: Date
      firstName: string | null
      lastName: string | null
      birthDate: Date
      gender: string
      weight: number
      height: number
      password: string
      measurementUnit: string
      exerciseWeightUnit: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userExcercises<T extends User$userExcercisesArgs<ExtArgs> = {}>(args?: Subset<T, User$userExcercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    protocols<T extends User$protocolsArgs<ExtArgs> = {}>(args?: Subset<T, User$protocolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtocolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    weightPrograms<T extends User$weightProgramsArgs<ExtArgs> = {}>(args?: Subset<T, User$weightProgramsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly birthDate: FieldRef<"User", 'DateTime'>
    readonly gender: FieldRef<"User", 'String'>
    readonly weight: FieldRef<"User", 'Float'>
    readonly height: FieldRef<"User", 'Float'>
    readonly password: FieldRef<"User", 'String'>
    readonly measurementUnit: FieldRef<"User", 'String'>
    readonly exerciseWeightUnit: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userExcercises
   */
  export type User$userExcercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExercise
     */
    select?: UserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExercise
     */
    omit?: UserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseInclude<ExtArgs> | null
    where?: UserExerciseWhereInput
    orderBy?: UserExerciseOrderByWithRelationInput | UserExerciseOrderByWithRelationInput[]
    cursor?: UserExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserExerciseScalarFieldEnum | UserExerciseScalarFieldEnum[]
  }

  /**
   * User.protocols
   */
  export type User$protocolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocol
     */
    select?: ProtocolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocol
     */
    omit?: ProtocolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolInclude<ExtArgs> | null
    where?: ProtocolWhereInput
    orderBy?: ProtocolOrderByWithRelationInput | ProtocolOrderByWithRelationInput[]
    cursor?: ProtocolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProtocolScalarFieldEnum | ProtocolScalarFieldEnum[]
  }

  /**
   * User.weightPrograms
   */
  export type User$weightProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightProgram
     */
    select?: WeightProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightProgram
     */
    omit?: WeightProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightProgramInclude<ExtArgs> | null
    where?: WeightProgramWhereInput
    orderBy?: WeightProgramOrderByWithRelationInput | WeightProgramOrderByWithRelationInput[]
    cursor?: WeightProgramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeightProgramScalarFieldEnum | WeightProgramScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseAvgAggregateOutputType = {
    id: number | null
  }

  export type ExerciseSumAggregateOutputType = {
    id: number | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: number | null
    name: string | null
    iconPath: string | null
    muscleGroup: string | null
    description: string | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    iconPath: string | null
    muscleGroup: string | null
    description: string | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    name: number
    iconPath: number
    muscleGroup: number
    description: number
    _all: number
  }


  export type ExerciseAvgAggregateInputType = {
    id?: true
  }

  export type ExerciseSumAggregateInputType = {
    id?: true
  }

  export type ExerciseMinAggregateInputType = {
    id?: true
    name?: true
    iconPath?: true
    muscleGroup?: true
    description?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    name?: true
    iconPath?: true
    muscleGroup?: true
    description?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    name?: true
    iconPath?: true
    muscleGroup?: true
    description?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _avg?: ExerciseAvgAggregateInputType
    _sum?: ExerciseSumAggregateInputType
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: number
    name: string
    iconPath: string
    muscleGroup: string
    description: string
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iconPath?: boolean
    muscleGroup?: boolean
    description?: boolean
    userExcercises?: boolean | Exercise$userExcercisesArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iconPath?: boolean
    muscleGroup?: boolean
    description?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iconPath?: boolean
    muscleGroup?: boolean
    description?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    id?: boolean
    name?: boolean
    iconPath?: boolean
    muscleGroup?: boolean
    description?: boolean
  }

  export type ExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "iconPath" | "muscleGroup" | "description", ExtArgs["result"]["exercise"]>
  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userExcercises?: boolean | Exercise$userExcercisesArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      userExcercises: Prisma.$UserExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      iconPath: string
      muscleGroup: string
      description: string
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {ExerciseUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
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
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userExcercises<T extends Exercise$userExcercisesArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$userExcercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Exercise model
   */
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'Int'>
    readonly name: FieldRef<"Exercise", 'String'>
    readonly iconPath: FieldRef<"Exercise", 'String'>
    readonly muscleGroup: FieldRef<"Exercise", 'String'>
    readonly description: FieldRef<"Exercise", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
  }

  /**
   * Exercise createManyAndReturn
   */
  export type ExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise updateManyAndReturn
   */
  export type ExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercise.userExcercises
   */
  export type Exercise$userExcercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExercise
     */
    select?: UserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExercise
     */
    omit?: UserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseInclude<ExtArgs> | null
    where?: UserExerciseWhereInput
    orderBy?: UserExerciseOrderByWithRelationInput | UserExerciseOrderByWithRelationInput[]
    cursor?: UserExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserExerciseScalarFieldEnum | UserExerciseScalarFieldEnum[]
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model UserExercise
   */

  export type AggregateUserExercise = {
    _count: UserExerciseCountAggregateOutputType | null
    _avg: UserExerciseAvgAggregateOutputType | null
    _sum: UserExerciseSumAggregateOutputType | null
    _min: UserExerciseMinAggregateOutputType | null
    _max: UserExerciseMaxAggregateOutputType | null
  }

  export type UserExerciseAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    currSets: number | null
    currReps: number | null
    currWeight: number | null
    exerciseId: number | null
  }

  export type UserExerciseSumAggregateOutputType = {
    id: number | null
    userId: number | null
    currSets: number | null
    currReps: number | null
    currWeight: number | null
    exerciseId: number | null
  }

  export type UserExerciseMinAggregateOutputType = {
    id: number | null
    userId: number | null
    currSets: number | null
    currReps: number | null
    currWeight: number | null
    exerciseId: number | null
    createdAt: Date | null
  }

  export type UserExerciseMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    currSets: number | null
    currReps: number | null
    currWeight: number | null
    exerciseId: number | null
    createdAt: Date | null
  }

  export type UserExerciseCountAggregateOutputType = {
    id: number
    userId: number
    currSets: number
    currReps: number
    currWeight: number
    exerciseId: number
    createdAt: number
    _all: number
  }


  export type UserExerciseAvgAggregateInputType = {
    id?: true
    userId?: true
    currSets?: true
    currReps?: true
    currWeight?: true
    exerciseId?: true
  }

  export type UserExerciseSumAggregateInputType = {
    id?: true
    userId?: true
    currSets?: true
    currReps?: true
    currWeight?: true
    exerciseId?: true
  }

  export type UserExerciseMinAggregateInputType = {
    id?: true
    userId?: true
    currSets?: true
    currReps?: true
    currWeight?: true
    exerciseId?: true
    createdAt?: true
  }

  export type UserExerciseMaxAggregateInputType = {
    id?: true
    userId?: true
    currSets?: true
    currReps?: true
    currWeight?: true
    exerciseId?: true
    createdAt?: true
  }

  export type UserExerciseCountAggregateInputType = {
    id?: true
    userId?: true
    currSets?: true
    currReps?: true
    currWeight?: true
    exerciseId?: true
    createdAt?: true
    _all?: true
  }

  export type UserExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserExercise to aggregate.
     */
    where?: UserExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExercises to fetch.
     */
    orderBy?: UserExerciseOrderByWithRelationInput | UserExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserExercises
    **/
    _count?: true | UserExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserExerciseMaxAggregateInputType
  }

  export type GetUserExerciseAggregateType<T extends UserExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateUserExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserExercise[P]>
      : GetScalarType<T[P], AggregateUserExercise[P]>
  }




  export type UserExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserExerciseWhereInput
    orderBy?: UserExerciseOrderByWithAggregationInput | UserExerciseOrderByWithAggregationInput[]
    by: UserExerciseScalarFieldEnum[] | UserExerciseScalarFieldEnum
    having?: UserExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserExerciseCountAggregateInputType | true
    _avg?: UserExerciseAvgAggregateInputType
    _sum?: UserExerciseSumAggregateInputType
    _min?: UserExerciseMinAggregateInputType
    _max?: UserExerciseMaxAggregateInputType
  }

  export type UserExerciseGroupByOutputType = {
    id: number
    userId: number
    currSets: number
    currReps: number
    currWeight: number
    exerciseId: number
    createdAt: Date
    _count: UserExerciseCountAggregateOutputType | null
    _avg: UserExerciseAvgAggregateOutputType | null
    _sum: UserExerciseSumAggregateOutputType | null
    _min: UserExerciseMinAggregateOutputType | null
    _max: UserExerciseMaxAggregateOutputType | null
  }

  type GetUserExerciseGroupByPayload<T extends UserExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], UserExerciseGroupByOutputType[P]>
        }
      >
    >


  export type UserExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currSets?: boolean
    currReps?: boolean
    currWeight?: boolean
    exerciseId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    exerciseRecords?: boolean | UserExercise$exerciseRecordsArgs<ExtArgs>
    protocolDayUserExercises?: boolean | UserExercise$protocolDayUserExercisesArgs<ExtArgs>
    _count?: boolean | UserExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userExercise"]>

  export type UserExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currSets?: boolean
    currReps?: boolean
    currWeight?: boolean
    exerciseId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userExercise"]>

  export type UserExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currSets?: boolean
    currReps?: boolean
    currWeight?: boolean
    exerciseId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userExercise"]>

  export type UserExerciseSelectScalar = {
    id?: boolean
    userId?: boolean
    currSets?: boolean
    currReps?: boolean
    currWeight?: boolean
    exerciseId?: boolean
    createdAt?: boolean
  }

  export type UserExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "currSets" | "currReps" | "currWeight" | "exerciseId" | "createdAt", ExtArgs["result"]["userExercise"]>
  export type UserExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    exerciseRecords?: boolean | UserExercise$exerciseRecordsArgs<ExtArgs>
    protocolDayUserExercises?: boolean | UserExercise$protocolDayUserExercisesArgs<ExtArgs>
    _count?: boolean | UserExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type UserExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $UserExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserExercise"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      exercise: Prisma.$ExercisePayload<ExtArgs>
      exerciseRecords: Prisma.$ExerciseRecordPayload<ExtArgs>[]
      protocolDayUserExercises: Prisma.$ProtocolDayUserExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      currSets: number
      currReps: number
      currWeight: number
      exerciseId: number
      createdAt: Date
    }, ExtArgs["result"]["userExercise"]>
    composites: {}
  }

  type UserExerciseGetPayload<S extends boolean | null | undefined | UserExerciseDefaultArgs> = $Result.GetResult<Prisma.$UserExercisePayload, S>

  type UserExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserExerciseCountAggregateInputType | true
    }

  export interface UserExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserExercise'], meta: { name: 'UserExercise' } }
    /**
     * Find zero or one UserExercise that matches the filter.
     * @param {UserExerciseFindUniqueArgs} args - Arguments to find a UserExercise
     * @example
     * // Get one UserExercise
     * const userExercise = await prisma.userExercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserExerciseFindUniqueArgs>(args: SelectSubset<T, UserExerciseFindUniqueArgs<ExtArgs>>): Prisma__UserExerciseClient<$Result.GetResult<Prisma.$UserExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserExercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserExerciseFindUniqueOrThrowArgs} args - Arguments to find a UserExercise
     * @example
     * // Get one UserExercise
     * const userExercise = await prisma.userExercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, UserExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserExerciseClient<$Result.GetResult<Prisma.$UserExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserExercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExerciseFindFirstArgs} args - Arguments to find a UserExercise
     * @example
     * // Get one UserExercise
     * const userExercise = await prisma.userExercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserExerciseFindFirstArgs>(args?: SelectSubset<T, UserExerciseFindFirstArgs<ExtArgs>>): Prisma__UserExerciseClient<$Result.GetResult<Prisma.$UserExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserExercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExerciseFindFirstOrThrowArgs} args - Arguments to find a UserExercise
     * @example
     * // Get one UserExercise
     * const userExercise = await prisma.userExercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, UserExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserExerciseClient<$Result.GetResult<Prisma.$UserExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserExercises
     * const userExercises = await prisma.userExercise.findMany()
     * 
     * // Get first 10 UserExercises
     * const userExercises = await prisma.userExercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userExerciseWithIdOnly = await prisma.userExercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserExerciseFindManyArgs>(args?: SelectSubset<T, UserExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserExercise.
     * @param {UserExerciseCreateArgs} args - Arguments to create a UserExercise.
     * @example
     * // Create one UserExercise
     * const UserExercise = await prisma.userExercise.create({
     *   data: {
     *     // ... data to create a UserExercise
     *   }
     * })
     * 
     */
    create<T extends UserExerciseCreateArgs>(args: SelectSubset<T, UserExerciseCreateArgs<ExtArgs>>): Prisma__UserExerciseClient<$Result.GetResult<Prisma.$UserExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserExercises.
     * @param {UserExerciseCreateManyArgs} args - Arguments to create many UserExercises.
     * @example
     * // Create many UserExercises
     * const userExercise = await prisma.userExercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserExerciseCreateManyArgs>(args?: SelectSubset<T, UserExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserExercises and returns the data saved in the database.
     * @param {UserExerciseCreateManyAndReturnArgs} args - Arguments to create many UserExercises.
     * @example
     * // Create many UserExercises
     * const userExercise = await prisma.userExercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserExercises and only return the `id`
     * const userExerciseWithIdOnly = await prisma.userExercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, UserExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserExercise.
     * @param {UserExerciseDeleteArgs} args - Arguments to delete one UserExercise.
     * @example
     * // Delete one UserExercise
     * const UserExercise = await prisma.userExercise.delete({
     *   where: {
     *     // ... filter to delete one UserExercise
     *   }
     * })
     * 
     */
    delete<T extends UserExerciseDeleteArgs>(args: SelectSubset<T, UserExerciseDeleteArgs<ExtArgs>>): Prisma__UserExerciseClient<$Result.GetResult<Prisma.$UserExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserExercise.
     * @param {UserExerciseUpdateArgs} args - Arguments to update one UserExercise.
     * @example
     * // Update one UserExercise
     * const userExercise = await prisma.userExercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserExerciseUpdateArgs>(args: SelectSubset<T, UserExerciseUpdateArgs<ExtArgs>>): Prisma__UserExerciseClient<$Result.GetResult<Prisma.$UserExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserExercises.
     * @param {UserExerciseDeleteManyArgs} args - Arguments to filter UserExercises to delete.
     * @example
     * // Delete a few UserExercises
     * const { count } = await prisma.userExercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserExerciseDeleteManyArgs>(args?: SelectSubset<T, UserExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserExercises
     * const userExercise = await prisma.userExercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserExerciseUpdateManyArgs>(args: SelectSubset<T, UserExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserExercises and returns the data updated in the database.
     * @param {UserExerciseUpdateManyAndReturnArgs} args - Arguments to update many UserExercises.
     * @example
     * // Update many UserExercises
     * const userExercise = await prisma.userExercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserExercises and only return the `id`
     * const userExerciseWithIdOnly = await prisma.userExercise.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, UserExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserExercise.
     * @param {UserExerciseUpsertArgs} args - Arguments to update or create a UserExercise.
     * @example
     * // Update or create a UserExercise
     * const userExercise = await prisma.userExercise.upsert({
     *   create: {
     *     // ... data to create a UserExercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserExercise we want to update
     *   }
     * })
     */
    upsert<T extends UserExerciseUpsertArgs>(args: SelectSubset<T, UserExerciseUpsertArgs<ExtArgs>>): Prisma__UserExerciseClient<$Result.GetResult<Prisma.$UserExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExerciseCountArgs} args - Arguments to filter UserExercises to count.
     * @example
     * // Count the number of UserExercises
     * const count = await prisma.userExercise.count({
     *   where: {
     *     // ... the filter for the UserExercises we want to count
     *   }
     * })
    **/
    count<T extends UserExerciseCountArgs>(
      args?: Subset<T, UserExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserExerciseAggregateArgs>(args: Subset<T, UserExerciseAggregateArgs>): Prisma.PrismaPromise<GetUserExerciseAggregateType<T>>

    /**
     * Group by UserExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExerciseGroupByArgs} args - Group by arguments.
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
      T extends UserExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserExerciseGroupByArgs['orderBy'] }
        : { orderBy?: UserExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserExercise model
   */
  readonly fields: UserExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserExercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exerciseRecords<T extends UserExercise$exerciseRecordsArgs<ExtArgs> = {}>(args?: Subset<T, UserExercise$exerciseRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    protocolDayUserExercises<T extends UserExercise$protocolDayUserExercisesArgs<ExtArgs> = {}>(args?: Subset<T, UserExercise$protocolDayUserExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtocolDayUserExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserExercise model
   */
  interface UserExerciseFieldRefs {
    readonly id: FieldRef<"UserExercise", 'Int'>
    readonly userId: FieldRef<"UserExercise", 'Int'>
    readonly currSets: FieldRef<"UserExercise", 'Int'>
    readonly currReps: FieldRef<"UserExercise", 'Int'>
    readonly currWeight: FieldRef<"UserExercise", 'Float'>
    readonly exerciseId: FieldRef<"UserExercise", 'Int'>
    readonly createdAt: FieldRef<"UserExercise", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserExercise findUnique
   */
  export type UserExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExercise
     */
    select?: UserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExercise
     */
    omit?: UserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseInclude<ExtArgs> | null
    /**
     * Filter, which UserExercise to fetch.
     */
    where: UserExerciseWhereUniqueInput
  }

  /**
   * UserExercise findUniqueOrThrow
   */
  export type UserExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExercise
     */
    select?: UserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExercise
     */
    omit?: UserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseInclude<ExtArgs> | null
    /**
     * Filter, which UserExercise to fetch.
     */
    where: UserExerciseWhereUniqueInput
  }

  /**
   * UserExercise findFirst
   */
  export type UserExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExercise
     */
    select?: UserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExercise
     */
    omit?: UserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseInclude<ExtArgs> | null
    /**
     * Filter, which UserExercise to fetch.
     */
    where?: UserExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExercises to fetch.
     */
    orderBy?: UserExerciseOrderByWithRelationInput | UserExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserExercises.
     */
    cursor?: UserExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserExercises.
     */
    distinct?: UserExerciseScalarFieldEnum | UserExerciseScalarFieldEnum[]
  }

  /**
   * UserExercise findFirstOrThrow
   */
  export type UserExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExercise
     */
    select?: UserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExercise
     */
    omit?: UserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseInclude<ExtArgs> | null
    /**
     * Filter, which UserExercise to fetch.
     */
    where?: UserExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExercises to fetch.
     */
    orderBy?: UserExerciseOrderByWithRelationInput | UserExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserExercises.
     */
    cursor?: UserExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserExercises.
     */
    distinct?: UserExerciseScalarFieldEnum | UserExerciseScalarFieldEnum[]
  }

  /**
   * UserExercise findMany
   */
  export type UserExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExercise
     */
    select?: UserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExercise
     */
    omit?: UserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseInclude<ExtArgs> | null
    /**
     * Filter, which UserExercises to fetch.
     */
    where?: UserExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExercises to fetch.
     */
    orderBy?: UserExerciseOrderByWithRelationInput | UserExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserExercises.
     */
    cursor?: UserExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExercises.
     */
    skip?: number
    distinct?: UserExerciseScalarFieldEnum | UserExerciseScalarFieldEnum[]
  }

  /**
   * UserExercise create
   */
  export type UserExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExercise
     */
    select?: UserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExercise
     */
    omit?: UserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a UserExercise.
     */
    data: XOR<UserExerciseCreateInput, UserExerciseUncheckedCreateInput>
  }

  /**
   * UserExercise createMany
   */
  export type UserExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserExercises.
     */
    data: UserExerciseCreateManyInput | UserExerciseCreateManyInput[]
  }

  /**
   * UserExercise createManyAndReturn
   */
  export type UserExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExercise
     */
    select?: UserExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserExercise
     */
    omit?: UserExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many UserExercises.
     */
    data: UserExerciseCreateManyInput | UserExerciseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserExercise update
   */
  export type UserExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExercise
     */
    select?: UserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExercise
     */
    omit?: UserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a UserExercise.
     */
    data: XOR<UserExerciseUpdateInput, UserExerciseUncheckedUpdateInput>
    /**
     * Choose, which UserExercise to update.
     */
    where: UserExerciseWhereUniqueInput
  }

  /**
   * UserExercise updateMany
   */
  export type UserExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserExercises.
     */
    data: XOR<UserExerciseUpdateManyMutationInput, UserExerciseUncheckedUpdateManyInput>
    /**
     * Filter which UserExercises to update
     */
    where?: UserExerciseWhereInput
    /**
     * Limit how many UserExercises to update.
     */
    limit?: number
  }

  /**
   * UserExercise updateManyAndReturn
   */
  export type UserExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExercise
     */
    select?: UserExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserExercise
     */
    omit?: UserExerciseOmit<ExtArgs> | null
    /**
     * The data used to update UserExercises.
     */
    data: XOR<UserExerciseUpdateManyMutationInput, UserExerciseUncheckedUpdateManyInput>
    /**
     * Filter which UserExercises to update
     */
    where?: UserExerciseWhereInput
    /**
     * Limit how many UserExercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserExercise upsert
   */
  export type UserExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExercise
     */
    select?: UserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExercise
     */
    omit?: UserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the UserExercise to update in case it exists.
     */
    where: UserExerciseWhereUniqueInput
    /**
     * In case the UserExercise found by the `where` argument doesn't exist, create a new UserExercise with this data.
     */
    create: XOR<UserExerciseCreateInput, UserExerciseUncheckedCreateInput>
    /**
     * In case the UserExercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserExerciseUpdateInput, UserExerciseUncheckedUpdateInput>
  }

  /**
   * UserExercise delete
   */
  export type UserExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExercise
     */
    select?: UserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExercise
     */
    omit?: UserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseInclude<ExtArgs> | null
    /**
     * Filter which UserExercise to delete.
     */
    where: UserExerciseWhereUniqueInput
  }

  /**
   * UserExercise deleteMany
   */
  export type UserExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserExercises to delete
     */
    where?: UserExerciseWhereInput
    /**
     * Limit how many UserExercises to delete.
     */
    limit?: number
  }

  /**
   * UserExercise.exerciseRecords
   */
  export type UserExercise$exerciseRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    where?: ExerciseRecordWhereInput
    orderBy?: ExerciseRecordOrderByWithRelationInput | ExerciseRecordOrderByWithRelationInput[]
    cursor?: ExerciseRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseRecordScalarFieldEnum | ExerciseRecordScalarFieldEnum[]
  }

  /**
   * UserExercise.protocolDayUserExercises
   */
  export type UserExercise$protocolDayUserExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDayUserExercise
     */
    select?: ProtocolDayUserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDayUserExercise
     */
    omit?: ProtocolDayUserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayUserExerciseInclude<ExtArgs> | null
    where?: ProtocolDayUserExerciseWhereInput
    orderBy?: ProtocolDayUserExerciseOrderByWithRelationInput | ProtocolDayUserExerciseOrderByWithRelationInput[]
    cursor?: ProtocolDayUserExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProtocolDayUserExerciseScalarFieldEnum | ProtocolDayUserExerciseScalarFieldEnum[]
  }

  /**
   * UserExercise without action
   */
  export type UserExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExercise
     */
    select?: UserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExercise
     */
    omit?: UserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExerciseInclude<ExtArgs> | null
  }


  /**
   * Model Protocol
   */

  export type AggregateProtocol = {
    _count: ProtocolCountAggregateOutputType | null
    _avg: ProtocolAvgAggregateOutputType | null
    _sum: ProtocolSumAggregateOutputType | null
    _min: ProtocolMinAggregateOutputType | null
    _max: ProtocolMaxAggregateOutputType | null
  }

  export type ProtocolAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProtocolSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProtocolMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    startedAt: Date | null
    active: boolean | null
    userId: number | null
  }

  export type ProtocolMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    startedAt: Date | null
    active: boolean | null
    userId: number | null
  }

  export type ProtocolCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    startedAt: number
    active: number
    userId: number
    _all: number
  }


  export type ProtocolAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProtocolSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProtocolMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    startedAt?: true
    active?: true
    userId?: true
  }

  export type ProtocolMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    startedAt?: true
    active?: true
    userId?: true
  }

  export type ProtocolCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    startedAt?: true
    active?: true
    userId?: true
    _all?: true
  }

  export type ProtocolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Protocol to aggregate.
     */
    where?: ProtocolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Protocols to fetch.
     */
    orderBy?: ProtocolOrderByWithRelationInput | ProtocolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProtocolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Protocols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Protocols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Protocols
    **/
    _count?: true | ProtocolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProtocolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProtocolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProtocolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProtocolMaxAggregateInputType
  }

  export type GetProtocolAggregateType<T extends ProtocolAggregateArgs> = {
        [P in keyof T & keyof AggregateProtocol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProtocol[P]>
      : GetScalarType<T[P], AggregateProtocol[P]>
  }




  export type ProtocolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProtocolWhereInput
    orderBy?: ProtocolOrderByWithAggregationInput | ProtocolOrderByWithAggregationInput[]
    by: ProtocolScalarFieldEnum[] | ProtocolScalarFieldEnum
    having?: ProtocolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProtocolCountAggregateInputType | true
    _avg?: ProtocolAvgAggregateInputType
    _sum?: ProtocolSumAggregateInputType
    _min?: ProtocolMinAggregateInputType
    _max?: ProtocolMaxAggregateInputType
  }

  export type ProtocolGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    startedAt: Date
    active: boolean
    userId: number
    _count: ProtocolCountAggregateOutputType | null
    _avg: ProtocolAvgAggregateOutputType | null
    _sum: ProtocolSumAggregateOutputType | null
    _min: ProtocolMinAggregateOutputType | null
    _max: ProtocolMaxAggregateOutputType | null
  }

  type GetProtocolGroupByPayload<T extends ProtocolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProtocolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProtocolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProtocolGroupByOutputType[P]>
            : GetScalarType<T[P], ProtocolGroupByOutputType[P]>
        }
      >
    >


  export type ProtocolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    startedAt?: boolean
    active?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    protocolDays?: boolean | Protocol$protocolDaysArgs<ExtArgs>
    _count?: boolean | ProtocolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["protocol"]>

  export type ProtocolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    startedAt?: boolean
    active?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["protocol"]>

  export type ProtocolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    startedAt?: boolean
    active?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["protocol"]>

  export type ProtocolSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    startedAt?: boolean
    active?: boolean
    userId?: boolean
  }

  export type ProtocolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "startedAt" | "active" | "userId", ExtArgs["result"]["protocol"]>
  export type ProtocolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    protocolDays?: boolean | Protocol$protocolDaysArgs<ExtArgs>
    _count?: boolean | ProtocolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProtocolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProtocolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProtocolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Protocol"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      protocolDays: Prisma.$ProtocolDayPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      startedAt: Date
      active: boolean
      userId: number
    }, ExtArgs["result"]["protocol"]>
    composites: {}
  }

  type ProtocolGetPayload<S extends boolean | null | undefined | ProtocolDefaultArgs> = $Result.GetResult<Prisma.$ProtocolPayload, S>

  type ProtocolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProtocolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProtocolCountAggregateInputType | true
    }

  export interface ProtocolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Protocol'], meta: { name: 'Protocol' } }
    /**
     * Find zero or one Protocol that matches the filter.
     * @param {ProtocolFindUniqueArgs} args - Arguments to find a Protocol
     * @example
     * // Get one Protocol
     * const protocol = await prisma.protocol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProtocolFindUniqueArgs>(args: SelectSubset<T, ProtocolFindUniqueArgs<ExtArgs>>): Prisma__ProtocolClient<$Result.GetResult<Prisma.$ProtocolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Protocol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProtocolFindUniqueOrThrowArgs} args - Arguments to find a Protocol
     * @example
     * // Get one Protocol
     * const protocol = await prisma.protocol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProtocolFindUniqueOrThrowArgs>(args: SelectSubset<T, ProtocolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProtocolClient<$Result.GetResult<Prisma.$ProtocolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Protocol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolFindFirstArgs} args - Arguments to find a Protocol
     * @example
     * // Get one Protocol
     * const protocol = await prisma.protocol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProtocolFindFirstArgs>(args?: SelectSubset<T, ProtocolFindFirstArgs<ExtArgs>>): Prisma__ProtocolClient<$Result.GetResult<Prisma.$ProtocolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Protocol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolFindFirstOrThrowArgs} args - Arguments to find a Protocol
     * @example
     * // Get one Protocol
     * const protocol = await prisma.protocol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProtocolFindFirstOrThrowArgs>(args?: SelectSubset<T, ProtocolFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProtocolClient<$Result.GetResult<Prisma.$ProtocolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Protocols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Protocols
     * const protocols = await prisma.protocol.findMany()
     * 
     * // Get first 10 Protocols
     * const protocols = await prisma.protocol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const protocolWithIdOnly = await prisma.protocol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProtocolFindManyArgs>(args?: SelectSubset<T, ProtocolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtocolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Protocol.
     * @param {ProtocolCreateArgs} args - Arguments to create a Protocol.
     * @example
     * // Create one Protocol
     * const Protocol = await prisma.protocol.create({
     *   data: {
     *     // ... data to create a Protocol
     *   }
     * })
     * 
     */
    create<T extends ProtocolCreateArgs>(args: SelectSubset<T, ProtocolCreateArgs<ExtArgs>>): Prisma__ProtocolClient<$Result.GetResult<Prisma.$ProtocolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Protocols.
     * @param {ProtocolCreateManyArgs} args - Arguments to create many Protocols.
     * @example
     * // Create many Protocols
     * const protocol = await prisma.protocol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProtocolCreateManyArgs>(args?: SelectSubset<T, ProtocolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Protocols and returns the data saved in the database.
     * @param {ProtocolCreateManyAndReturnArgs} args - Arguments to create many Protocols.
     * @example
     * // Create many Protocols
     * const protocol = await prisma.protocol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Protocols and only return the `id`
     * const protocolWithIdOnly = await prisma.protocol.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProtocolCreateManyAndReturnArgs>(args?: SelectSubset<T, ProtocolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtocolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Protocol.
     * @param {ProtocolDeleteArgs} args - Arguments to delete one Protocol.
     * @example
     * // Delete one Protocol
     * const Protocol = await prisma.protocol.delete({
     *   where: {
     *     // ... filter to delete one Protocol
     *   }
     * })
     * 
     */
    delete<T extends ProtocolDeleteArgs>(args: SelectSubset<T, ProtocolDeleteArgs<ExtArgs>>): Prisma__ProtocolClient<$Result.GetResult<Prisma.$ProtocolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Protocol.
     * @param {ProtocolUpdateArgs} args - Arguments to update one Protocol.
     * @example
     * // Update one Protocol
     * const protocol = await prisma.protocol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProtocolUpdateArgs>(args: SelectSubset<T, ProtocolUpdateArgs<ExtArgs>>): Prisma__ProtocolClient<$Result.GetResult<Prisma.$ProtocolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Protocols.
     * @param {ProtocolDeleteManyArgs} args - Arguments to filter Protocols to delete.
     * @example
     * // Delete a few Protocols
     * const { count } = await prisma.protocol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProtocolDeleteManyArgs>(args?: SelectSubset<T, ProtocolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Protocols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Protocols
     * const protocol = await prisma.protocol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProtocolUpdateManyArgs>(args: SelectSubset<T, ProtocolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Protocols and returns the data updated in the database.
     * @param {ProtocolUpdateManyAndReturnArgs} args - Arguments to update many Protocols.
     * @example
     * // Update many Protocols
     * const protocol = await prisma.protocol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Protocols and only return the `id`
     * const protocolWithIdOnly = await prisma.protocol.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ProtocolUpdateManyAndReturnArgs>(args: SelectSubset<T, ProtocolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtocolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Protocol.
     * @param {ProtocolUpsertArgs} args - Arguments to update or create a Protocol.
     * @example
     * // Update or create a Protocol
     * const protocol = await prisma.protocol.upsert({
     *   create: {
     *     // ... data to create a Protocol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Protocol we want to update
     *   }
     * })
     */
    upsert<T extends ProtocolUpsertArgs>(args: SelectSubset<T, ProtocolUpsertArgs<ExtArgs>>): Prisma__ProtocolClient<$Result.GetResult<Prisma.$ProtocolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Protocols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolCountArgs} args - Arguments to filter Protocols to count.
     * @example
     * // Count the number of Protocols
     * const count = await prisma.protocol.count({
     *   where: {
     *     // ... the filter for the Protocols we want to count
     *   }
     * })
    **/
    count<T extends ProtocolCountArgs>(
      args?: Subset<T, ProtocolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProtocolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Protocol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProtocolAggregateArgs>(args: Subset<T, ProtocolAggregateArgs>): Prisma.PrismaPromise<GetProtocolAggregateType<T>>

    /**
     * Group by Protocol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolGroupByArgs} args - Group by arguments.
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
      T extends ProtocolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProtocolGroupByArgs['orderBy'] }
        : { orderBy?: ProtocolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProtocolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProtocolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Protocol model
   */
  readonly fields: ProtocolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Protocol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProtocolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    protocolDays<T extends Protocol$protocolDaysArgs<ExtArgs> = {}>(args?: Subset<T, Protocol$protocolDaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtocolDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Protocol model
   */
  interface ProtocolFieldRefs {
    readonly id: FieldRef<"Protocol", 'Int'>
    readonly name: FieldRef<"Protocol", 'String'>
    readonly createdAt: FieldRef<"Protocol", 'DateTime'>
    readonly startedAt: FieldRef<"Protocol", 'DateTime'>
    readonly active: FieldRef<"Protocol", 'Boolean'>
    readonly userId: FieldRef<"Protocol", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Protocol findUnique
   */
  export type ProtocolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocol
     */
    select?: ProtocolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocol
     */
    omit?: ProtocolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolInclude<ExtArgs> | null
    /**
     * Filter, which Protocol to fetch.
     */
    where: ProtocolWhereUniqueInput
  }

  /**
   * Protocol findUniqueOrThrow
   */
  export type ProtocolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocol
     */
    select?: ProtocolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocol
     */
    omit?: ProtocolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolInclude<ExtArgs> | null
    /**
     * Filter, which Protocol to fetch.
     */
    where: ProtocolWhereUniqueInput
  }

  /**
   * Protocol findFirst
   */
  export type ProtocolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocol
     */
    select?: ProtocolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocol
     */
    omit?: ProtocolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolInclude<ExtArgs> | null
    /**
     * Filter, which Protocol to fetch.
     */
    where?: ProtocolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Protocols to fetch.
     */
    orderBy?: ProtocolOrderByWithRelationInput | ProtocolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Protocols.
     */
    cursor?: ProtocolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Protocols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Protocols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Protocols.
     */
    distinct?: ProtocolScalarFieldEnum | ProtocolScalarFieldEnum[]
  }

  /**
   * Protocol findFirstOrThrow
   */
  export type ProtocolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocol
     */
    select?: ProtocolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocol
     */
    omit?: ProtocolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolInclude<ExtArgs> | null
    /**
     * Filter, which Protocol to fetch.
     */
    where?: ProtocolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Protocols to fetch.
     */
    orderBy?: ProtocolOrderByWithRelationInput | ProtocolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Protocols.
     */
    cursor?: ProtocolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Protocols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Protocols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Protocols.
     */
    distinct?: ProtocolScalarFieldEnum | ProtocolScalarFieldEnum[]
  }

  /**
   * Protocol findMany
   */
  export type ProtocolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocol
     */
    select?: ProtocolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocol
     */
    omit?: ProtocolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolInclude<ExtArgs> | null
    /**
     * Filter, which Protocols to fetch.
     */
    where?: ProtocolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Protocols to fetch.
     */
    orderBy?: ProtocolOrderByWithRelationInput | ProtocolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Protocols.
     */
    cursor?: ProtocolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Protocols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Protocols.
     */
    skip?: number
    distinct?: ProtocolScalarFieldEnum | ProtocolScalarFieldEnum[]
  }

  /**
   * Protocol create
   */
  export type ProtocolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocol
     */
    select?: ProtocolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocol
     */
    omit?: ProtocolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolInclude<ExtArgs> | null
    /**
     * The data needed to create a Protocol.
     */
    data: XOR<ProtocolCreateInput, ProtocolUncheckedCreateInput>
  }

  /**
   * Protocol createMany
   */
  export type ProtocolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Protocols.
     */
    data: ProtocolCreateManyInput | ProtocolCreateManyInput[]
  }

  /**
   * Protocol createManyAndReturn
   */
  export type ProtocolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocol
     */
    select?: ProtocolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Protocol
     */
    omit?: ProtocolOmit<ExtArgs> | null
    /**
     * The data used to create many Protocols.
     */
    data: ProtocolCreateManyInput | ProtocolCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Protocol update
   */
  export type ProtocolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocol
     */
    select?: ProtocolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocol
     */
    omit?: ProtocolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolInclude<ExtArgs> | null
    /**
     * The data needed to update a Protocol.
     */
    data: XOR<ProtocolUpdateInput, ProtocolUncheckedUpdateInput>
    /**
     * Choose, which Protocol to update.
     */
    where: ProtocolWhereUniqueInput
  }

  /**
   * Protocol updateMany
   */
  export type ProtocolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Protocols.
     */
    data: XOR<ProtocolUpdateManyMutationInput, ProtocolUncheckedUpdateManyInput>
    /**
     * Filter which Protocols to update
     */
    where?: ProtocolWhereInput
    /**
     * Limit how many Protocols to update.
     */
    limit?: number
  }

  /**
   * Protocol updateManyAndReturn
   */
  export type ProtocolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocol
     */
    select?: ProtocolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Protocol
     */
    omit?: ProtocolOmit<ExtArgs> | null
    /**
     * The data used to update Protocols.
     */
    data: XOR<ProtocolUpdateManyMutationInput, ProtocolUncheckedUpdateManyInput>
    /**
     * Filter which Protocols to update
     */
    where?: ProtocolWhereInput
    /**
     * Limit how many Protocols to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Protocol upsert
   */
  export type ProtocolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocol
     */
    select?: ProtocolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocol
     */
    omit?: ProtocolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolInclude<ExtArgs> | null
    /**
     * The filter to search for the Protocol to update in case it exists.
     */
    where: ProtocolWhereUniqueInput
    /**
     * In case the Protocol found by the `where` argument doesn't exist, create a new Protocol with this data.
     */
    create: XOR<ProtocolCreateInput, ProtocolUncheckedCreateInput>
    /**
     * In case the Protocol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProtocolUpdateInput, ProtocolUncheckedUpdateInput>
  }

  /**
   * Protocol delete
   */
  export type ProtocolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocol
     */
    select?: ProtocolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocol
     */
    omit?: ProtocolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolInclude<ExtArgs> | null
    /**
     * Filter which Protocol to delete.
     */
    where: ProtocolWhereUniqueInput
  }

  /**
   * Protocol deleteMany
   */
  export type ProtocolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Protocols to delete
     */
    where?: ProtocolWhereInput
    /**
     * Limit how many Protocols to delete.
     */
    limit?: number
  }

  /**
   * Protocol.protocolDays
   */
  export type Protocol$protocolDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDay
     */
    select?: ProtocolDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDay
     */
    omit?: ProtocolDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayInclude<ExtArgs> | null
    where?: ProtocolDayWhereInput
    orderBy?: ProtocolDayOrderByWithRelationInput | ProtocolDayOrderByWithRelationInput[]
    cursor?: ProtocolDayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProtocolDayScalarFieldEnum | ProtocolDayScalarFieldEnum[]
  }

  /**
   * Protocol without action
   */
  export type ProtocolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protocol
     */
    select?: ProtocolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protocol
     */
    omit?: ProtocolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolInclude<ExtArgs> | null
  }


  /**
   * Model ProtocolDay
   */

  export type AggregateProtocolDay = {
    _count: ProtocolDayCountAggregateOutputType | null
    _avg: ProtocolDayAvgAggregateOutputType | null
    _sum: ProtocolDaySumAggregateOutputType | null
    _min: ProtocolDayMinAggregateOutputType | null
    _max: ProtocolDayMaxAggregateOutputType | null
  }

  export type ProtocolDayAvgAggregateOutputType = {
    id: number | null
    order: number | null
    protocolId: number | null
  }

  export type ProtocolDaySumAggregateOutputType = {
    id: number | null
    order: number | null
    protocolId: number | null
  }

  export type ProtocolDayMinAggregateOutputType = {
    id: number | null
    name: string | null
    order: number | null
    recurrent: boolean | null
    protocolId: number | null
  }

  export type ProtocolDayMaxAggregateOutputType = {
    id: number | null
    name: string | null
    order: number | null
    recurrent: boolean | null
    protocolId: number | null
  }

  export type ProtocolDayCountAggregateOutputType = {
    id: number
    name: number
    order: number
    recurrent: number
    protocolId: number
    _all: number
  }


  export type ProtocolDayAvgAggregateInputType = {
    id?: true
    order?: true
    protocolId?: true
  }

  export type ProtocolDaySumAggregateInputType = {
    id?: true
    order?: true
    protocolId?: true
  }

  export type ProtocolDayMinAggregateInputType = {
    id?: true
    name?: true
    order?: true
    recurrent?: true
    protocolId?: true
  }

  export type ProtocolDayMaxAggregateInputType = {
    id?: true
    name?: true
    order?: true
    recurrent?: true
    protocolId?: true
  }

  export type ProtocolDayCountAggregateInputType = {
    id?: true
    name?: true
    order?: true
    recurrent?: true
    protocolId?: true
    _all?: true
  }

  export type ProtocolDayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProtocolDay to aggregate.
     */
    where?: ProtocolDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProtocolDays to fetch.
     */
    orderBy?: ProtocolDayOrderByWithRelationInput | ProtocolDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProtocolDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProtocolDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProtocolDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProtocolDays
    **/
    _count?: true | ProtocolDayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProtocolDayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProtocolDaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProtocolDayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProtocolDayMaxAggregateInputType
  }

  export type GetProtocolDayAggregateType<T extends ProtocolDayAggregateArgs> = {
        [P in keyof T & keyof AggregateProtocolDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProtocolDay[P]>
      : GetScalarType<T[P], AggregateProtocolDay[P]>
  }




  export type ProtocolDayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProtocolDayWhereInput
    orderBy?: ProtocolDayOrderByWithAggregationInput | ProtocolDayOrderByWithAggregationInput[]
    by: ProtocolDayScalarFieldEnum[] | ProtocolDayScalarFieldEnum
    having?: ProtocolDayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProtocolDayCountAggregateInputType | true
    _avg?: ProtocolDayAvgAggregateInputType
    _sum?: ProtocolDaySumAggregateInputType
    _min?: ProtocolDayMinAggregateInputType
    _max?: ProtocolDayMaxAggregateInputType
  }

  export type ProtocolDayGroupByOutputType = {
    id: number
    name: string
    order: number
    recurrent: boolean
    protocolId: number
    _count: ProtocolDayCountAggregateOutputType | null
    _avg: ProtocolDayAvgAggregateOutputType | null
    _sum: ProtocolDaySumAggregateOutputType | null
    _min: ProtocolDayMinAggregateOutputType | null
    _max: ProtocolDayMaxAggregateOutputType | null
  }

  type GetProtocolDayGroupByPayload<T extends ProtocolDayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProtocolDayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProtocolDayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProtocolDayGroupByOutputType[P]>
            : GetScalarType<T[P], ProtocolDayGroupByOutputType[P]>
        }
      >
    >


  export type ProtocolDaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    recurrent?: boolean
    protocolId?: boolean
    protocol?: boolean | ProtocolDefaultArgs<ExtArgs>
    workouts?: boolean | ProtocolDay$workoutsArgs<ExtArgs>
    protocolDayUserExercises?: boolean | ProtocolDay$protocolDayUserExercisesArgs<ExtArgs>
    _count?: boolean | ProtocolDayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["protocolDay"]>

  export type ProtocolDaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    recurrent?: boolean
    protocolId?: boolean
    protocol?: boolean | ProtocolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["protocolDay"]>

  export type ProtocolDaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    recurrent?: boolean
    protocolId?: boolean
    protocol?: boolean | ProtocolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["protocolDay"]>

  export type ProtocolDaySelectScalar = {
    id?: boolean
    name?: boolean
    order?: boolean
    recurrent?: boolean
    protocolId?: boolean
  }

  export type ProtocolDayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "order" | "recurrent" | "protocolId", ExtArgs["result"]["protocolDay"]>
  export type ProtocolDayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    protocol?: boolean | ProtocolDefaultArgs<ExtArgs>
    workouts?: boolean | ProtocolDay$workoutsArgs<ExtArgs>
    protocolDayUserExercises?: boolean | ProtocolDay$protocolDayUserExercisesArgs<ExtArgs>
    _count?: boolean | ProtocolDayCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProtocolDayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    protocol?: boolean | ProtocolDefaultArgs<ExtArgs>
  }
  export type ProtocolDayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    protocol?: boolean | ProtocolDefaultArgs<ExtArgs>
  }

  export type $ProtocolDayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProtocolDay"
    objects: {
      protocol: Prisma.$ProtocolPayload<ExtArgs>
      workouts: Prisma.$WorkoutPayload<ExtArgs>[]
      protocolDayUserExercises: Prisma.$ProtocolDayUserExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      order: number
      recurrent: boolean
      protocolId: number
    }, ExtArgs["result"]["protocolDay"]>
    composites: {}
  }

  type ProtocolDayGetPayload<S extends boolean | null | undefined | ProtocolDayDefaultArgs> = $Result.GetResult<Prisma.$ProtocolDayPayload, S>

  type ProtocolDayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProtocolDayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProtocolDayCountAggregateInputType | true
    }

  export interface ProtocolDayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProtocolDay'], meta: { name: 'ProtocolDay' } }
    /**
     * Find zero or one ProtocolDay that matches the filter.
     * @param {ProtocolDayFindUniqueArgs} args - Arguments to find a ProtocolDay
     * @example
     * // Get one ProtocolDay
     * const protocolDay = await prisma.protocolDay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProtocolDayFindUniqueArgs>(args: SelectSubset<T, ProtocolDayFindUniqueArgs<ExtArgs>>): Prisma__ProtocolDayClient<$Result.GetResult<Prisma.$ProtocolDayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProtocolDay that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProtocolDayFindUniqueOrThrowArgs} args - Arguments to find a ProtocolDay
     * @example
     * // Get one ProtocolDay
     * const protocolDay = await prisma.protocolDay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProtocolDayFindUniqueOrThrowArgs>(args: SelectSubset<T, ProtocolDayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProtocolDayClient<$Result.GetResult<Prisma.$ProtocolDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProtocolDay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolDayFindFirstArgs} args - Arguments to find a ProtocolDay
     * @example
     * // Get one ProtocolDay
     * const protocolDay = await prisma.protocolDay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProtocolDayFindFirstArgs>(args?: SelectSubset<T, ProtocolDayFindFirstArgs<ExtArgs>>): Prisma__ProtocolDayClient<$Result.GetResult<Prisma.$ProtocolDayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProtocolDay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolDayFindFirstOrThrowArgs} args - Arguments to find a ProtocolDay
     * @example
     * // Get one ProtocolDay
     * const protocolDay = await prisma.protocolDay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProtocolDayFindFirstOrThrowArgs>(args?: SelectSubset<T, ProtocolDayFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProtocolDayClient<$Result.GetResult<Prisma.$ProtocolDayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProtocolDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolDayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProtocolDays
     * const protocolDays = await prisma.protocolDay.findMany()
     * 
     * // Get first 10 ProtocolDays
     * const protocolDays = await prisma.protocolDay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const protocolDayWithIdOnly = await prisma.protocolDay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProtocolDayFindManyArgs>(args?: SelectSubset<T, ProtocolDayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtocolDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProtocolDay.
     * @param {ProtocolDayCreateArgs} args - Arguments to create a ProtocolDay.
     * @example
     * // Create one ProtocolDay
     * const ProtocolDay = await prisma.protocolDay.create({
     *   data: {
     *     // ... data to create a ProtocolDay
     *   }
     * })
     * 
     */
    create<T extends ProtocolDayCreateArgs>(args: SelectSubset<T, ProtocolDayCreateArgs<ExtArgs>>): Prisma__ProtocolDayClient<$Result.GetResult<Prisma.$ProtocolDayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProtocolDays.
     * @param {ProtocolDayCreateManyArgs} args - Arguments to create many ProtocolDays.
     * @example
     * // Create many ProtocolDays
     * const protocolDay = await prisma.protocolDay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProtocolDayCreateManyArgs>(args?: SelectSubset<T, ProtocolDayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProtocolDays and returns the data saved in the database.
     * @param {ProtocolDayCreateManyAndReturnArgs} args - Arguments to create many ProtocolDays.
     * @example
     * // Create many ProtocolDays
     * const protocolDay = await prisma.protocolDay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProtocolDays and only return the `id`
     * const protocolDayWithIdOnly = await prisma.protocolDay.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProtocolDayCreateManyAndReturnArgs>(args?: SelectSubset<T, ProtocolDayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtocolDayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProtocolDay.
     * @param {ProtocolDayDeleteArgs} args - Arguments to delete one ProtocolDay.
     * @example
     * // Delete one ProtocolDay
     * const ProtocolDay = await prisma.protocolDay.delete({
     *   where: {
     *     // ... filter to delete one ProtocolDay
     *   }
     * })
     * 
     */
    delete<T extends ProtocolDayDeleteArgs>(args: SelectSubset<T, ProtocolDayDeleteArgs<ExtArgs>>): Prisma__ProtocolDayClient<$Result.GetResult<Prisma.$ProtocolDayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProtocolDay.
     * @param {ProtocolDayUpdateArgs} args - Arguments to update one ProtocolDay.
     * @example
     * // Update one ProtocolDay
     * const protocolDay = await prisma.protocolDay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProtocolDayUpdateArgs>(args: SelectSubset<T, ProtocolDayUpdateArgs<ExtArgs>>): Prisma__ProtocolDayClient<$Result.GetResult<Prisma.$ProtocolDayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProtocolDays.
     * @param {ProtocolDayDeleteManyArgs} args - Arguments to filter ProtocolDays to delete.
     * @example
     * // Delete a few ProtocolDays
     * const { count } = await prisma.protocolDay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProtocolDayDeleteManyArgs>(args?: SelectSubset<T, ProtocolDayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProtocolDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolDayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProtocolDays
     * const protocolDay = await prisma.protocolDay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProtocolDayUpdateManyArgs>(args: SelectSubset<T, ProtocolDayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProtocolDays and returns the data updated in the database.
     * @param {ProtocolDayUpdateManyAndReturnArgs} args - Arguments to update many ProtocolDays.
     * @example
     * // Update many ProtocolDays
     * const protocolDay = await prisma.protocolDay.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProtocolDays and only return the `id`
     * const protocolDayWithIdOnly = await prisma.protocolDay.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ProtocolDayUpdateManyAndReturnArgs>(args: SelectSubset<T, ProtocolDayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtocolDayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProtocolDay.
     * @param {ProtocolDayUpsertArgs} args - Arguments to update or create a ProtocolDay.
     * @example
     * // Update or create a ProtocolDay
     * const protocolDay = await prisma.protocolDay.upsert({
     *   create: {
     *     // ... data to create a ProtocolDay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProtocolDay we want to update
     *   }
     * })
     */
    upsert<T extends ProtocolDayUpsertArgs>(args: SelectSubset<T, ProtocolDayUpsertArgs<ExtArgs>>): Prisma__ProtocolDayClient<$Result.GetResult<Prisma.$ProtocolDayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProtocolDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolDayCountArgs} args - Arguments to filter ProtocolDays to count.
     * @example
     * // Count the number of ProtocolDays
     * const count = await prisma.protocolDay.count({
     *   where: {
     *     // ... the filter for the ProtocolDays we want to count
     *   }
     * })
    **/
    count<T extends ProtocolDayCountArgs>(
      args?: Subset<T, ProtocolDayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProtocolDayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProtocolDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolDayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProtocolDayAggregateArgs>(args: Subset<T, ProtocolDayAggregateArgs>): Prisma.PrismaPromise<GetProtocolDayAggregateType<T>>

    /**
     * Group by ProtocolDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolDayGroupByArgs} args - Group by arguments.
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
      T extends ProtocolDayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProtocolDayGroupByArgs['orderBy'] }
        : { orderBy?: ProtocolDayGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProtocolDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProtocolDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProtocolDay model
   */
  readonly fields: ProtocolDayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProtocolDay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProtocolDayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    protocol<T extends ProtocolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProtocolDefaultArgs<ExtArgs>>): Prisma__ProtocolClient<$Result.GetResult<Prisma.$ProtocolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workouts<T extends ProtocolDay$workoutsArgs<ExtArgs> = {}>(args?: Subset<T, ProtocolDay$workoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    protocolDayUserExercises<T extends ProtocolDay$protocolDayUserExercisesArgs<ExtArgs> = {}>(args?: Subset<T, ProtocolDay$protocolDayUserExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtocolDayUserExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProtocolDay model
   */
  interface ProtocolDayFieldRefs {
    readonly id: FieldRef<"ProtocolDay", 'Int'>
    readonly name: FieldRef<"ProtocolDay", 'String'>
    readonly order: FieldRef<"ProtocolDay", 'Int'>
    readonly recurrent: FieldRef<"ProtocolDay", 'Boolean'>
    readonly protocolId: FieldRef<"ProtocolDay", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProtocolDay findUnique
   */
  export type ProtocolDayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDay
     */
    select?: ProtocolDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDay
     */
    omit?: ProtocolDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayInclude<ExtArgs> | null
    /**
     * Filter, which ProtocolDay to fetch.
     */
    where: ProtocolDayWhereUniqueInput
  }

  /**
   * ProtocolDay findUniqueOrThrow
   */
  export type ProtocolDayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDay
     */
    select?: ProtocolDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDay
     */
    omit?: ProtocolDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayInclude<ExtArgs> | null
    /**
     * Filter, which ProtocolDay to fetch.
     */
    where: ProtocolDayWhereUniqueInput
  }

  /**
   * ProtocolDay findFirst
   */
  export type ProtocolDayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDay
     */
    select?: ProtocolDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDay
     */
    omit?: ProtocolDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayInclude<ExtArgs> | null
    /**
     * Filter, which ProtocolDay to fetch.
     */
    where?: ProtocolDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProtocolDays to fetch.
     */
    orderBy?: ProtocolDayOrderByWithRelationInput | ProtocolDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProtocolDays.
     */
    cursor?: ProtocolDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProtocolDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProtocolDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProtocolDays.
     */
    distinct?: ProtocolDayScalarFieldEnum | ProtocolDayScalarFieldEnum[]
  }

  /**
   * ProtocolDay findFirstOrThrow
   */
  export type ProtocolDayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDay
     */
    select?: ProtocolDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDay
     */
    omit?: ProtocolDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayInclude<ExtArgs> | null
    /**
     * Filter, which ProtocolDay to fetch.
     */
    where?: ProtocolDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProtocolDays to fetch.
     */
    orderBy?: ProtocolDayOrderByWithRelationInput | ProtocolDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProtocolDays.
     */
    cursor?: ProtocolDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProtocolDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProtocolDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProtocolDays.
     */
    distinct?: ProtocolDayScalarFieldEnum | ProtocolDayScalarFieldEnum[]
  }

  /**
   * ProtocolDay findMany
   */
  export type ProtocolDayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDay
     */
    select?: ProtocolDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDay
     */
    omit?: ProtocolDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayInclude<ExtArgs> | null
    /**
     * Filter, which ProtocolDays to fetch.
     */
    where?: ProtocolDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProtocolDays to fetch.
     */
    orderBy?: ProtocolDayOrderByWithRelationInput | ProtocolDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProtocolDays.
     */
    cursor?: ProtocolDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProtocolDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProtocolDays.
     */
    skip?: number
    distinct?: ProtocolDayScalarFieldEnum | ProtocolDayScalarFieldEnum[]
  }

  /**
   * ProtocolDay create
   */
  export type ProtocolDayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDay
     */
    select?: ProtocolDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDay
     */
    omit?: ProtocolDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayInclude<ExtArgs> | null
    /**
     * The data needed to create a ProtocolDay.
     */
    data: XOR<ProtocolDayCreateInput, ProtocolDayUncheckedCreateInput>
  }

  /**
   * ProtocolDay createMany
   */
  export type ProtocolDayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProtocolDays.
     */
    data: ProtocolDayCreateManyInput | ProtocolDayCreateManyInput[]
  }

  /**
   * ProtocolDay createManyAndReturn
   */
  export type ProtocolDayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDay
     */
    select?: ProtocolDaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDay
     */
    omit?: ProtocolDayOmit<ExtArgs> | null
    /**
     * The data used to create many ProtocolDays.
     */
    data: ProtocolDayCreateManyInput | ProtocolDayCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProtocolDay update
   */
  export type ProtocolDayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDay
     */
    select?: ProtocolDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDay
     */
    omit?: ProtocolDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayInclude<ExtArgs> | null
    /**
     * The data needed to update a ProtocolDay.
     */
    data: XOR<ProtocolDayUpdateInput, ProtocolDayUncheckedUpdateInput>
    /**
     * Choose, which ProtocolDay to update.
     */
    where: ProtocolDayWhereUniqueInput
  }

  /**
   * ProtocolDay updateMany
   */
  export type ProtocolDayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProtocolDays.
     */
    data: XOR<ProtocolDayUpdateManyMutationInput, ProtocolDayUncheckedUpdateManyInput>
    /**
     * Filter which ProtocolDays to update
     */
    where?: ProtocolDayWhereInput
    /**
     * Limit how many ProtocolDays to update.
     */
    limit?: number
  }

  /**
   * ProtocolDay updateManyAndReturn
   */
  export type ProtocolDayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDay
     */
    select?: ProtocolDaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDay
     */
    omit?: ProtocolDayOmit<ExtArgs> | null
    /**
     * The data used to update ProtocolDays.
     */
    data: XOR<ProtocolDayUpdateManyMutationInput, ProtocolDayUncheckedUpdateManyInput>
    /**
     * Filter which ProtocolDays to update
     */
    where?: ProtocolDayWhereInput
    /**
     * Limit how many ProtocolDays to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProtocolDay upsert
   */
  export type ProtocolDayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDay
     */
    select?: ProtocolDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDay
     */
    omit?: ProtocolDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayInclude<ExtArgs> | null
    /**
     * The filter to search for the ProtocolDay to update in case it exists.
     */
    where: ProtocolDayWhereUniqueInput
    /**
     * In case the ProtocolDay found by the `where` argument doesn't exist, create a new ProtocolDay with this data.
     */
    create: XOR<ProtocolDayCreateInput, ProtocolDayUncheckedCreateInput>
    /**
     * In case the ProtocolDay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProtocolDayUpdateInput, ProtocolDayUncheckedUpdateInput>
  }

  /**
   * ProtocolDay delete
   */
  export type ProtocolDayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDay
     */
    select?: ProtocolDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDay
     */
    omit?: ProtocolDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayInclude<ExtArgs> | null
    /**
     * Filter which ProtocolDay to delete.
     */
    where: ProtocolDayWhereUniqueInput
  }

  /**
   * ProtocolDay deleteMany
   */
  export type ProtocolDayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProtocolDays to delete
     */
    where?: ProtocolDayWhereInput
    /**
     * Limit how many ProtocolDays to delete.
     */
    limit?: number
  }

  /**
   * ProtocolDay.workouts
   */
  export type ProtocolDay$workoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    cursor?: WorkoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * ProtocolDay.protocolDayUserExercises
   */
  export type ProtocolDay$protocolDayUserExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDayUserExercise
     */
    select?: ProtocolDayUserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDayUserExercise
     */
    omit?: ProtocolDayUserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayUserExerciseInclude<ExtArgs> | null
    where?: ProtocolDayUserExerciseWhereInput
    orderBy?: ProtocolDayUserExerciseOrderByWithRelationInput | ProtocolDayUserExerciseOrderByWithRelationInput[]
    cursor?: ProtocolDayUserExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProtocolDayUserExerciseScalarFieldEnum | ProtocolDayUserExerciseScalarFieldEnum[]
  }

  /**
   * ProtocolDay without action
   */
  export type ProtocolDayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDay
     */
    select?: ProtocolDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDay
     */
    omit?: ProtocolDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayInclude<ExtArgs> | null
  }


  /**
   * Model Workout
   */

  export type AggregateWorkout = {
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  export type WorkoutAvgAggregateOutputType = {
    id: number | null
    protocolDayId: number | null
  }

  export type WorkoutSumAggregateOutputType = {
    id: number | null
    protocolDayId: number | null
  }

  export type WorkoutMinAggregateOutputType = {
    id: number | null
    startTime: Date | null
    endTime: Date | null
    protocolDayId: number | null
  }

  export type WorkoutMaxAggregateOutputType = {
    id: number | null
    startTime: Date | null
    endTime: Date | null
    protocolDayId: number | null
  }

  export type WorkoutCountAggregateOutputType = {
    id: number
    startTime: number
    endTime: number
    protocolDayId: number
    _all: number
  }


  export type WorkoutAvgAggregateInputType = {
    id?: true
    protocolDayId?: true
  }

  export type WorkoutSumAggregateInputType = {
    id?: true
    protocolDayId?: true
  }

  export type WorkoutMinAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    protocolDayId?: true
  }

  export type WorkoutMaxAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    protocolDayId?: true
  }

  export type WorkoutCountAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    protocolDayId?: true
    _all?: true
  }

  export type WorkoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workout to aggregate.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workouts
    **/
    _count?: true | WorkoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutMaxAggregateInputType
  }

  export type GetWorkoutAggregateType<T extends WorkoutAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkout[P]>
      : GetScalarType<T[P], AggregateWorkout[P]>
  }




  export type WorkoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithAggregationInput | WorkoutOrderByWithAggregationInput[]
    by: WorkoutScalarFieldEnum[] | WorkoutScalarFieldEnum
    having?: WorkoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutCountAggregateInputType | true
    _avg?: WorkoutAvgAggregateInputType
    _sum?: WorkoutSumAggregateInputType
    _min?: WorkoutMinAggregateInputType
    _max?: WorkoutMaxAggregateInputType
  }

  export type WorkoutGroupByOutputType = {
    id: number
    startTime: Date
    endTime: Date
    protocolDayId: number
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  type GetWorkoutGroupByPayload<T extends WorkoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    protocolDayId?: boolean
    protocolDay?: boolean | ProtocolDayDefaultArgs<ExtArgs>
    exerciseRecords?: boolean | Workout$exerciseRecordsArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    protocolDayId?: boolean
    protocolDay?: boolean | ProtocolDayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    protocolDayId?: boolean
    protocolDay?: boolean | ProtocolDayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectScalar = {
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    protocolDayId?: boolean
  }

  export type WorkoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startTime" | "endTime" | "protocolDayId", ExtArgs["result"]["workout"]>
  export type WorkoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    protocolDay?: boolean | ProtocolDayDefaultArgs<ExtArgs>
    exerciseRecords?: boolean | Workout$exerciseRecordsArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    protocolDay?: boolean | ProtocolDayDefaultArgs<ExtArgs>
  }
  export type WorkoutIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    protocolDay?: boolean | ProtocolDayDefaultArgs<ExtArgs>
  }

  export type $WorkoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workout"
    objects: {
      protocolDay: Prisma.$ProtocolDayPayload<ExtArgs>
      exerciseRecords: Prisma.$ExerciseRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startTime: Date
      endTime: Date
      protocolDayId: number
    }, ExtArgs["result"]["workout"]>
    composites: {}
  }

  type WorkoutGetPayload<S extends boolean | null | undefined | WorkoutDefaultArgs> = $Result.GetResult<Prisma.$WorkoutPayload, S>

  type WorkoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutCountAggregateInputType | true
    }

  export interface WorkoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workout'], meta: { name: 'Workout' } }
    /**
     * Find zero or one Workout that matches the filter.
     * @param {WorkoutFindUniqueArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutFindUniqueArgs>(args: SelectSubset<T, WorkoutFindUniqueArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutFindUniqueOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutFindFirstArgs>(args?: SelectSubset<T, WorkoutFindFirstArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workouts
     * const workouts = await prisma.workout.findMany()
     * 
     * // Get first 10 Workouts
     * const workouts = await prisma.workout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutWithIdOnly = await prisma.workout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutFindManyArgs>(args?: SelectSubset<T, WorkoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workout.
     * @param {WorkoutCreateArgs} args - Arguments to create a Workout.
     * @example
     * // Create one Workout
     * const Workout = await prisma.workout.create({
     *   data: {
     *     // ... data to create a Workout
     *   }
     * })
     * 
     */
    create<T extends WorkoutCreateArgs>(args: SelectSubset<T, WorkoutCreateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workouts.
     * @param {WorkoutCreateManyArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutCreateManyArgs>(args?: SelectSubset<T, WorkoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workouts and returns the data saved in the database.
     * @param {WorkoutCreateManyAndReturnArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workouts and only return the `id`
     * const workoutWithIdOnly = await prisma.workout.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workout.
     * @param {WorkoutDeleteArgs} args - Arguments to delete one Workout.
     * @example
     * // Delete one Workout
     * const Workout = await prisma.workout.delete({
     *   where: {
     *     // ... filter to delete one Workout
     *   }
     * })
     * 
     */
    delete<T extends WorkoutDeleteArgs>(args: SelectSubset<T, WorkoutDeleteArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workout.
     * @param {WorkoutUpdateArgs} args - Arguments to update one Workout.
     * @example
     * // Update one Workout
     * const workout = await prisma.workout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutUpdateArgs>(args: SelectSubset<T, WorkoutUpdateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workouts.
     * @param {WorkoutDeleteManyArgs} args - Arguments to filter Workouts to delete.
     * @example
     * // Delete a few Workouts
     * const { count } = await prisma.workout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutDeleteManyArgs>(args?: SelectSubset<T, WorkoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutUpdateManyArgs>(args: SelectSubset<T, WorkoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts and returns the data updated in the database.
     * @param {WorkoutUpdateManyAndReturnArgs} args - Arguments to update many Workouts.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workouts and only return the `id`
     * const workoutWithIdOnly = await prisma.workout.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends WorkoutUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workout.
     * @param {WorkoutUpsertArgs} args - Arguments to update or create a Workout.
     * @example
     * // Update or create a Workout
     * const workout = await prisma.workout.upsert({
     *   create: {
     *     // ... data to create a Workout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workout we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutUpsertArgs>(args: SelectSubset<T, WorkoutUpsertArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutCountArgs} args - Arguments to filter Workouts to count.
     * @example
     * // Count the number of Workouts
     * const count = await prisma.workout.count({
     *   where: {
     *     // ... the filter for the Workouts we want to count
     *   }
     * })
    **/
    count<T extends WorkoutCountArgs>(
      args?: Subset<T, WorkoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutAggregateArgs>(args: Subset<T, WorkoutAggregateArgs>): Prisma.PrismaPromise<GetWorkoutAggregateType<T>>

    /**
     * Group by Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutGroupByArgs} args - Group by arguments.
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
      T extends WorkoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workout model
   */
  readonly fields: WorkoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    protocolDay<T extends ProtocolDayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProtocolDayDefaultArgs<ExtArgs>>): Prisma__ProtocolDayClient<$Result.GetResult<Prisma.$ProtocolDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exerciseRecords<T extends Workout$exerciseRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Workout$exerciseRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Workout model
   */
  interface WorkoutFieldRefs {
    readonly id: FieldRef<"Workout", 'Int'>
    readonly startTime: FieldRef<"Workout", 'DateTime'>
    readonly endTime: FieldRef<"Workout", 'DateTime'>
    readonly protocolDayId: FieldRef<"Workout", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Workout findUnique
   */
  export type WorkoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findUniqueOrThrow
   */
  export type WorkoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findFirst
   */
  export type WorkoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findFirstOrThrow
   */
  export type WorkoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findMany
   */
  export type WorkoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workouts to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout create
   */
  export type WorkoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Workout.
     */
    data: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
  }

  /**
   * Workout createMany
   */
  export type WorkoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
  }

  /**
   * Workout createManyAndReturn
   */
  export type WorkoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workout update
   */
  export type WorkoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Workout.
     */
    data: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
    /**
     * Choose, which Workout to update.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout updateMany
   */
  export type WorkoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
  }

  /**
   * Workout updateManyAndReturn
   */
  export type WorkoutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workout upsert
   */
  export type WorkoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Workout to update in case it exists.
     */
    where: WorkoutWhereUniqueInput
    /**
     * In case the Workout found by the `where` argument doesn't exist, create a new Workout with this data.
     */
    create: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
    /**
     * In case the Workout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
  }

  /**
   * Workout delete
   */
  export type WorkoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter which Workout to delete.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout deleteMany
   */
  export type WorkoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workouts to delete
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to delete.
     */
    limit?: number
  }

  /**
   * Workout.exerciseRecords
   */
  export type Workout$exerciseRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    where?: ExerciseRecordWhereInput
    orderBy?: ExerciseRecordOrderByWithRelationInput | ExerciseRecordOrderByWithRelationInput[]
    cursor?: ExerciseRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseRecordScalarFieldEnum | ExerciseRecordScalarFieldEnum[]
  }

  /**
   * Workout without action
   */
  export type WorkoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
  }


  /**
   * Model ExerciseRecord
   */

  export type AggregateExerciseRecord = {
    _count: ExerciseRecordCountAggregateOutputType | null
    _avg: ExerciseRecordAvgAggregateOutputType | null
    _sum: ExerciseRecordSumAggregateOutputType | null
    _min: ExerciseRecordMinAggregateOutputType | null
    _max: ExerciseRecordMaxAggregateOutputType | null
  }

  export type ExerciseRecordAvgAggregateOutputType = {
    id: number | null
    reps: number | null
    set: number | null
    weight: number | null
    workoutId: number | null
    userExerciseId: number | null
  }

  export type ExerciseRecordSumAggregateOutputType = {
    id: number | null
    reps: number | null
    set: number | null
    weight: number | null
    workoutId: number | null
    userExerciseId: number | null
  }

  export type ExerciseRecordMinAggregateOutputType = {
    id: number | null
    reps: number | null
    set: number | null
    weight: number | null
    workoutId: number | null
    userExerciseId: number | null
  }

  export type ExerciseRecordMaxAggregateOutputType = {
    id: number | null
    reps: number | null
    set: number | null
    weight: number | null
    workoutId: number | null
    userExerciseId: number | null
  }

  export type ExerciseRecordCountAggregateOutputType = {
    id: number
    reps: number
    set: number
    weight: number
    workoutId: number
    userExerciseId: number
    _all: number
  }


  export type ExerciseRecordAvgAggregateInputType = {
    id?: true
    reps?: true
    set?: true
    weight?: true
    workoutId?: true
    userExerciseId?: true
  }

  export type ExerciseRecordSumAggregateInputType = {
    id?: true
    reps?: true
    set?: true
    weight?: true
    workoutId?: true
    userExerciseId?: true
  }

  export type ExerciseRecordMinAggregateInputType = {
    id?: true
    reps?: true
    set?: true
    weight?: true
    workoutId?: true
    userExerciseId?: true
  }

  export type ExerciseRecordMaxAggregateInputType = {
    id?: true
    reps?: true
    set?: true
    weight?: true
    workoutId?: true
    userExerciseId?: true
  }

  export type ExerciseRecordCountAggregateInputType = {
    id?: true
    reps?: true
    set?: true
    weight?: true
    workoutId?: true
    userExerciseId?: true
    _all?: true
  }

  export type ExerciseRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseRecord to aggregate.
     */
    where?: ExerciseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseRecords to fetch.
     */
    orderBy?: ExerciseRecordOrderByWithRelationInput | ExerciseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExerciseRecords
    **/
    _count?: true | ExerciseRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseRecordMaxAggregateInputType
  }

  export type GetExerciseRecordAggregateType<T extends ExerciseRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateExerciseRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExerciseRecord[P]>
      : GetScalarType<T[P], AggregateExerciseRecord[P]>
  }




  export type ExerciseRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseRecordWhereInput
    orderBy?: ExerciseRecordOrderByWithAggregationInput | ExerciseRecordOrderByWithAggregationInput[]
    by: ExerciseRecordScalarFieldEnum[] | ExerciseRecordScalarFieldEnum
    having?: ExerciseRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseRecordCountAggregateInputType | true
    _avg?: ExerciseRecordAvgAggregateInputType
    _sum?: ExerciseRecordSumAggregateInputType
    _min?: ExerciseRecordMinAggregateInputType
    _max?: ExerciseRecordMaxAggregateInputType
  }

  export type ExerciseRecordGroupByOutputType = {
    id: number
    reps: number
    set: number
    weight: number
    workoutId: number
    userExerciseId: number
    _count: ExerciseRecordCountAggregateOutputType | null
    _avg: ExerciseRecordAvgAggregateOutputType | null
    _sum: ExerciseRecordSumAggregateOutputType | null
    _min: ExerciseRecordMinAggregateOutputType | null
    _max: ExerciseRecordMaxAggregateOutputType | null
  }

  type GetExerciseRecordGroupByPayload<T extends ExerciseRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseRecordGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reps?: boolean
    set?: boolean
    weight?: boolean
    workoutId?: boolean
    userExerciseId?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    userExercise?: boolean | UserExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseRecord"]>

  export type ExerciseRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reps?: boolean
    set?: boolean
    weight?: boolean
    workoutId?: boolean
    userExerciseId?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    userExercise?: boolean | UserExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseRecord"]>

  export type ExerciseRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reps?: boolean
    set?: boolean
    weight?: boolean
    workoutId?: boolean
    userExerciseId?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    userExercise?: boolean | UserExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseRecord"]>

  export type ExerciseRecordSelectScalar = {
    id?: boolean
    reps?: boolean
    set?: boolean
    weight?: boolean
    workoutId?: boolean
    userExerciseId?: boolean
  }

  export type ExerciseRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reps" | "set" | "weight" | "workoutId" | "userExerciseId", ExtArgs["result"]["exerciseRecord"]>
  export type ExerciseRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    userExercise?: boolean | UserExerciseDefaultArgs<ExtArgs>
  }
  export type ExerciseRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    userExercise?: boolean | UserExerciseDefaultArgs<ExtArgs>
  }
  export type ExerciseRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    userExercise?: boolean | UserExerciseDefaultArgs<ExtArgs>
  }

  export type $ExerciseRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExerciseRecord"
    objects: {
      workout: Prisma.$WorkoutPayload<ExtArgs>
      userExercise: Prisma.$UserExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reps: number
      set: number
      weight: number
      workoutId: number
      userExerciseId: number
    }, ExtArgs["result"]["exerciseRecord"]>
    composites: {}
  }

  type ExerciseRecordGetPayload<S extends boolean | null | undefined | ExerciseRecordDefaultArgs> = $Result.GetResult<Prisma.$ExerciseRecordPayload, S>

  type ExerciseRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseRecordCountAggregateInputType | true
    }

  export interface ExerciseRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExerciseRecord'], meta: { name: 'ExerciseRecord' } }
    /**
     * Find zero or one ExerciseRecord that matches the filter.
     * @param {ExerciseRecordFindUniqueArgs} args - Arguments to find a ExerciseRecord
     * @example
     * // Get one ExerciseRecord
     * const exerciseRecord = await prisma.exerciseRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseRecordFindUniqueArgs>(args: SelectSubset<T, ExerciseRecordFindUniqueArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExerciseRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseRecordFindUniqueOrThrowArgs} args - Arguments to find a ExerciseRecord
     * @example
     * // Get one ExerciseRecord
     * const exerciseRecord = await prisma.exerciseRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseRecordFindFirstArgs} args - Arguments to find a ExerciseRecord
     * @example
     * // Get one ExerciseRecord
     * const exerciseRecord = await prisma.exerciseRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseRecordFindFirstArgs>(args?: SelectSubset<T, ExerciseRecordFindFirstArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseRecordFindFirstOrThrowArgs} args - Arguments to find a ExerciseRecord
     * @example
     * // Get one ExerciseRecord
     * const exerciseRecord = await prisma.exerciseRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExerciseRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExerciseRecords
     * const exerciseRecords = await prisma.exerciseRecord.findMany()
     * 
     * // Get first 10 ExerciseRecords
     * const exerciseRecords = await prisma.exerciseRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseRecordWithIdOnly = await prisma.exerciseRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseRecordFindManyArgs>(args?: SelectSubset<T, ExerciseRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExerciseRecord.
     * @param {ExerciseRecordCreateArgs} args - Arguments to create a ExerciseRecord.
     * @example
     * // Create one ExerciseRecord
     * const ExerciseRecord = await prisma.exerciseRecord.create({
     *   data: {
     *     // ... data to create a ExerciseRecord
     *   }
     * })
     * 
     */
    create<T extends ExerciseRecordCreateArgs>(args: SelectSubset<T, ExerciseRecordCreateArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExerciseRecords.
     * @param {ExerciseRecordCreateManyArgs} args - Arguments to create many ExerciseRecords.
     * @example
     * // Create many ExerciseRecords
     * const exerciseRecord = await prisma.exerciseRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseRecordCreateManyArgs>(args?: SelectSubset<T, ExerciseRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExerciseRecords and returns the data saved in the database.
     * @param {ExerciseRecordCreateManyAndReturnArgs} args - Arguments to create many ExerciseRecords.
     * @example
     * // Create many ExerciseRecords
     * const exerciseRecord = await prisma.exerciseRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExerciseRecords and only return the `id`
     * const exerciseRecordWithIdOnly = await prisma.exerciseRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExerciseRecord.
     * @param {ExerciseRecordDeleteArgs} args - Arguments to delete one ExerciseRecord.
     * @example
     * // Delete one ExerciseRecord
     * const ExerciseRecord = await prisma.exerciseRecord.delete({
     *   where: {
     *     // ... filter to delete one ExerciseRecord
     *   }
     * })
     * 
     */
    delete<T extends ExerciseRecordDeleteArgs>(args: SelectSubset<T, ExerciseRecordDeleteArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExerciseRecord.
     * @param {ExerciseRecordUpdateArgs} args - Arguments to update one ExerciseRecord.
     * @example
     * // Update one ExerciseRecord
     * const exerciseRecord = await prisma.exerciseRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseRecordUpdateArgs>(args: SelectSubset<T, ExerciseRecordUpdateArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExerciseRecords.
     * @param {ExerciseRecordDeleteManyArgs} args - Arguments to filter ExerciseRecords to delete.
     * @example
     * // Delete a few ExerciseRecords
     * const { count } = await prisma.exerciseRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseRecordDeleteManyArgs>(args?: SelectSubset<T, ExerciseRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExerciseRecords
     * const exerciseRecord = await prisma.exerciseRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseRecordUpdateManyArgs>(args: SelectSubset<T, ExerciseRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseRecords and returns the data updated in the database.
     * @param {ExerciseRecordUpdateManyAndReturnArgs} args - Arguments to update many ExerciseRecords.
     * @example
     * // Update many ExerciseRecords
     * const exerciseRecord = await prisma.exerciseRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExerciseRecords and only return the `id`
     * const exerciseRecordWithIdOnly = await prisma.exerciseRecord.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ExerciseRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExerciseRecord.
     * @param {ExerciseRecordUpsertArgs} args - Arguments to update or create a ExerciseRecord.
     * @example
     * // Update or create a ExerciseRecord
     * const exerciseRecord = await prisma.exerciseRecord.upsert({
     *   create: {
     *     // ... data to create a ExerciseRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExerciseRecord we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseRecordUpsertArgs>(args: SelectSubset<T, ExerciseRecordUpsertArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExerciseRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseRecordCountArgs} args - Arguments to filter ExerciseRecords to count.
     * @example
     * // Count the number of ExerciseRecords
     * const count = await prisma.exerciseRecord.count({
     *   where: {
     *     // ... the filter for the ExerciseRecords we want to count
     *   }
     * })
    **/
    count<T extends ExerciseRecordCountArgs>(
      args?: Subset<T, ExerciseRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExerciseRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseRecordAggregateArgs>(args: Subset<T, ExerciseRecordAggregateArgs>): Prisma.PrismaPromise<GetExerciseRecordAggregateType<T>>

    /**
     * Group by ExerciseRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseRecordGroupByArgs} args - Group by arguments.
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
      T extends ExerciseRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseRecordGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExerciseRecord model
   */
  readonly fields: ExerciseRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExerciseRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workout<T extends WorkoutDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutDefaultArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userExercise<T extends UserExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserExerciseDefaultArgs<ExtArgs>>): Prisma__UserExerciseClient<$Result.GetResult<Prisma.$UserExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExerciseRecord model
   */
  interface ExerciseRecordFieldRefs {
    readonly id: FieldRef<"ExerciseRecord", 'Int'>
    readonly reps: FieldRef<"ExerciseRecord", 'Int'>
    readonly set: FieldRef<"ExerciseRecord", 'Int'>
    readonly weight: FieldRef<"ExerciseRecord", 'Float'>
    readonly workoutId: FieldRef<"ExerciseRecord", 'Int'>
    readonly userExerciseId: FieldRef<"ExerciseRecord", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ExerciseRecord findUnique
   */
  export type ExerciseRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseRecord to fetch.
     */
    where: ExerciseRecordWhereUniqueInput
  }

  /**
   * ExerciseRecord findUniqueOrThrow
   */
  export type ExerciseRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseRecord to fetch.
     */
    where: ExerciseRecordWhereUniqueInput
  }

  /**
   * ExerciseRecord findFirst
   */
  export type ExerciseRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseRecord to fetch.
     */
    where?: ExerciseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseRecords to fetch.
     */
    orderBy?: ExerciseRecordOrderByWithRelationInput | ExerciseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseRecords.
     */
    cursor?: ExerciseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseRecords.
     */
    distinct?: ExerciseRecordScalarFieldEnum | ExerciseRecordScalarFieldEnum[]
  }

  /**
   * ExerciseRecord findFirstOrThrow
   */
  export type ExerciseRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseRecord to fetch.
     */
    where?: ExerciseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseRecords to fetch.
     */
    orderBy?: ExerciseRecordOrderByWithRelationInput | ExerciseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseRecords.
     */
    cursor?: ExerciseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseRecords.
     */
    distinct?: ExerciseRecordScalarFieldEnum | ExerciseRecordScalarFieldEnum[]
  }

  /**
   * ExerciseRecord findMany
   */
  export type ExerciseRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseRecords to fetch.
     */
    where?: ExerciseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseRecords to fetch.
     */
    orderBy?: ExerciseRecordOrderByWithRelationInput | ExerciseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExerciseRecords.
     */
    cursor?: ExerciseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseRecords.
     */
    skip?: number
    distinct?: ExerciseRecordScalarFieldEnum | ExerciseRecordScalarFieldEnum[]
  }

  /**
   * ExerciseRecord create
   */
  export type ExerciseRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a ExerciseRecord.
     */
    data: XOR<ExerciseRecordCreateInput, ExerciseRecordUncheckedCreateInput>
  }

  /**
   * ExerciseRecord createMany
   */
  export type ExerciseRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExerciseRecords.
     */
    data: ExerciseRecordCreateManyInput | ExerciseRecordCreateManyInput[]
  }

  /**
   * ExerciseRecord createManyAndReturn
   */
  export type ExerciseRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * The data used to create many ExerciseRecords.
     */
    data: ExerciseRecordCreateManyInput | ExerciseRecordCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExerciseRecord update
   */
  export type ExerciseRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a ExerciseRecord.
     */
    data: XOR<ExerciseRecordUpdateInput, ExerciseRecordUncheckedUpdateInput>
    /**
     * Choose, which ExerciseRecord to update.
     */
    where: ExerciseRecordWhereUniqueInput
  }

  /**
   * ExerciseRecord updateMany
   */
  export type ExerciseRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExerciseRecords.
     */
    data: XOR<ExerciseRecordUpdateManyMutationInput, ExerciseRecordUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseRecords to update
     */
    where?: ExerciseRecordWhereInput
    /**
     * Limit how many ExerciseRecords to update.
     */
    limit?: number
  }

  /**
   * ExerciseRecord updateManyAndReturn
   */
  export type ExerciseRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * The data used to update ExerciseRecords.
     */
    data: XOR<ExerciseRecordUpdateManyMutationInput, ExerciseRecordUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseRecords to update
     */
    where?: ExerciseRecordWhereInput
    /**
     * Limit how many ExerciseRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExerciseRecord upsert
   */
  export type ExerciseRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the ExerciseRecord to update in case it exists.
     */
    where: ExerciseRecordWhereUniqueInput
    /**
     * In case the ExerciseRecord found by the `where` argument doesn't exist, create a new ExerciseRecord with this data.
     */
    create: XOR<ExerciseRecordCreateInput, ExerciseRecordUncheckedCreateInput>
    /**
     * In case the ExerciseRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseRecordUpdateInput, ExerciseRecordUncheckedUpdateInput>
  }

  /**
   * ExerciseRecord delete
   */
  export type ExerciseRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * Filter which ExerciseRecord to delete.
     */
    where: ExerciseRecordWhereUniqueInput
  }

  /**
   * ExerciseRecord deleteMany
   */
  export type ExerciseRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseRecords to delete
     */
    where?: ExerciseRecordWhereInput
    /**
     * Limit how many ExerciseRecords to delete.
     */
    limit?: number
  }

  /**
   * ExerciseRecord without action
   */
  export type ExerciseRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
  }


  /**
   * Model ProtocolDayUserExercise
   */

  export type AggregateProtocolDayUserExercise = {
    _count: ProtocolDayUserExerciseCountAggregateOutputType | null
    _avg: ProtocolDayUserExerciseAvgAggregateOutputType | null
    _sum: ProtocolDayUserExerciseSumAggregateOutputType | null
    _min: ProtocolDayUserExerciseMinAggregateOutputType | null
    _max: ProtocolDayUserExerciseMaxAggregateOutputType | null
  }

  export type ProtocolDayUserExerciseAvgAggregateOutputType = {
    id: number | null
    userExerciseId: number | null
    protocolDayId: number | null
  }

  export type ProtocolDayUserExerciseSumAggregateOutputType = {
    id: number | null
    userExerciseId: number | null
    protocolDayId: number | null
  }

  export type ProtocolDayUserExerciseMinAggregateOutputType = {
    id: number | null
    userExerciseId: number | null
    protocolDayId: number | null
  }

  export type ProtocolDayUserExerciseMaxAggregateOutputType = {
    id: number | null
    userExerciseId: number | null
    protocolDayId: number | null
  }

  export type ProtocolDayUserExerciseCountAggregateOutputType = {
    id: number
    userExerciseId: number
    protocolDayId: number
    _all: number
  }


  export type ProtocolDayUserExerciseAvgAggregateInputType = {
    id?: true
    userExerciseId?: true
    protocolDayId?: true
  }

  export type ProtocolDayUserExerciseSumAggregateInputType = {
    id?: true
    userExerciseId?: true
    protocolDayId?: true
  }

  export type ProtocolDayUserExerciseMinAggregateInputType = {
    id?: true
    userExerciseId?: true
    protocolDayId?: true
  }

  export type ProtocolDayUserExerciseMaxAggregateInputType = {
    id?: true
    userExerciseId?: true
    protocolDayId?: true
  }

  export type ProtocolDayUserExerciseCountAggregateInputType = {
    id?: true
    userExerciseId?: true
    protocolDayId?: true
    _all?: true
  }

  export type ProtocolDayUserExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProtocolDayUserExercise to aggregate.
     */
    where?: ProtocolDayUserExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProtocolDayUserExercises to fetch.
     */
    orderBy?: ProtocolDayUserExerciseOrderByWithRelationInput | ProtocolDayUserExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProtocolDayUserExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProtocolDayUserExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProtocolDayUserExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProtocolDayUserExercises
    **/
    _count?: true | ProtocolDayUserExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProtocolDayUserExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProtocolDayUserExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProtocolDayUserExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProtocolDayUserExerciseMaxAggregateInputType
  }

  export type GetProtocolDayUserExerciseAggregateType<T extends ProtocolDayUserExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateProtocolDayUserExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProtocolDayUserExercise[P]>
      : GetScalarType<T[P], AggregateProtocolDayUserExercise[P]>
  }




  export type ProtocolDayUserExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProtocolDayUserExerciseWhereInput
    orderBy?: ProtocolDayUserExerciseOrderByWithAggregationInput | ProtocolDayUserExerciseOrderByWithAggregationInput[]
    by: ProtocolDayUserExerciseScalarFieldEnum[] | ProtocolDayUserExerciseScalarFieldEnum
    having?: ProtocolDayUserExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProtocolDayUserExerciseCountAggregateInputType | true
    _avg?: ProtocolDayUserExerciseAvgAggregateInputType
    _sum?: ProtocolDayUserExerciseSumAggregateInputType
    _min?: ProtocolDayUserExerciseMinAggregateInputType
    _max?: ProtocolDayUserExerciseMaxAggregateInputType
  }

  export type ProtocolDayUserExerciseGroupByOutputType = {
    id: number
    userExerciseId: number
    protocolDayId: number
    _count: ProtocolDayUserExerciseCountAggregateOutputType | null
    _avg: ProtocolDayUserExerciseAvgAggregateOutputType | null
    _sum: ProtocolDayUserExerciseSumAggregateOutputType | null
    _min: ProtocolDayUserExerciseMinAggregateOutputType | null
    _max: ProtocolDayUserExerciseMaxAggregateOutputType | null
  }

  type GetProtocolDayUserExerciseGroupByPayload<T extends ProtocolDayUserExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProtocolDayUserExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProtocolDayUserExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProtocolDayUserExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ProtocolDayUserExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ProtocolDayUserExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userExerciseId?: boolean
    protocolDayId?: boolean
    userExercise?: boolean | UserExerciseDefaultArgs<ExtArgs>
    protocolDay?: boolean | ProtocolDayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["protocolDayUserExercise"]>

  export type ProtocolDayUserExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userExerciseId?: boolean
    protocolDayId?: boolean
    userExercise?: boolean | UserExerciseDefaultArgs<ExtArgs>
    protocolDay?: boolean | ProtocolDayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["protocolDayUserExercise"]>

  export type ProtocolDayUserExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userExerciseId?: boolean
    protocolDayId?: boolean
    userExercise?: boolean | UserExerciseDefaultArgs<ExtArgs>
    protocolDay?: boolean | ProtocolDayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["protocolDayUserExercise"]>

  export type ProtocolDayUserExerciseSelectScalar = {
    id?: boolean
    userExerciseId?: boolean
    protocolDayId?: boolean
  }

  export type ProtocolDayUserExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userExerciseId" | "protocolDayId", ExtArgs["result"]["protocolDayUserExercise"]>
  export type ProtocolDayUserExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userExercise?: boolean | UserExerciseDefaultArgs<ExtArgs>
    protocolDay?: boolean | ProtocolDayDefaultArgs<ExtArgs>
  }
  export type ProtocolDayUserExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userExercise?: boolean | UserExerciseDefaultArgs<ExtArgs>
    protocolDay?: boolean | ProtocolDayDefaultArgs<ExtArgs>
  }
  export type ProtocolDayUserExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userExercise?: boolean | UserExerciseDefaultArgs<ExtArgs>
    protocolDay?: boolean | ProtocolDayDefaultArgs<ExtArgs>
  }

  export type $ProtocolDayUserExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProtocolDayUserExercise"
    objects: {
      userExercise: Prisma.$UserExercisePayload<ExtArgs>
      protocolDay: Prisma.$ProtocolDayPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userExerciseId: number
      protocolDayId: number
    }, ExtArgs["result"]["protocolDayUserExercise"]>
    composites: {}
  }

  type ProtocolDayUserExerciseGetPayload<S extends boolean | null | undefined | ProtocolDayUserExerciseDefaultArgs> = $Result.GetResult<Prisma.$ProtocolDayUserExercisePayload, S>

  type ProtocolDayUserExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProtocolDayUserExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProtocolDayUserExerciseCountAggregateInputType | true
    }

  export interface ProtocolDayUserExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProtocolDayUserExercise'], meta: { name: 'ProtocolDayUserExercise' } }
    /**
     * Find zero or one ProtocolDayUserExercise that matches the filter.
     * @param {ProtocolDayUserExerciseFindUniqueArgs} args - Arguments to find a ProtocolDayUserExercise
     * @example
     * // Get one ProtocolDayUserExercise
     * const protocolDayUserExercise = await prisma.protocolDayUserExercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProtocolDayUserExerciseFindUniqueArgs>(args: SelectSubset<T, ProtocolDayUserExerciseFindUniqueArgs<ExtArgs>>): Prisma__ProtocolDayUserExerciseClient<$Result.GetResult<Prisma.$ProtocolDayUserExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProtocolDayUserExercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProtocolDayUserExerciseFindUniqueOrThrowArgs} args - Arguments to find a ProtocolDayUserExercise
     * @example
     * // Get one ProtocolDayUserExercise
     * const protocolDayUserExercise = await prisma.protocolDayUserExercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProtocolDayUserExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ProtocolDayUserExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProtocolDayUserExerciseClient<$Result.GetResult<Prisma.$ProtocolDayUserExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProtocolDayUserExercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolDayUserExerciseFindFirstArgs} args - Arguments to find a ProtocolDayUserExercise
     * @example
     * // Get one ProtocolDayUserExercise
     * const protocolDayUserExercise = await prisma.protocolDayUserExercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProtocolDayUserExerciseFindFirstArgs>(args?: SelectSubset<T, ProtocolDayUserExerciseFindFirstArgs<ExtArgs>>): Prisma__ProtocolDayUserExerciseClient<$Result.GetResult<Prisma.$ProtocolDayUserExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProtocolDayUserExercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolDayUserExerciseFindFirstOrThrowArgs} args - Arguments to find a ProtocolDayUserExercise
     * @example
     * // Get one ProtocolDayUserExercise
     * const protocolDayUserExercise = await prisma.protocolDayUserExercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProtocolDayUserExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ProtocolDayUserExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProtocolDayUserExerciseClient<$Result.GetResult<Prisma.$ProtocolDayUserExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProtocolDayUserExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolDayUserExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProtocolDayUserExercises
     * const protocolDayUserExercises = await prisma.protocolDayUserExercise.findMany()
     * 
     * // Get first 10 ProtocolDayUserExercises
     * const protocolDayUserExercises = await prisma.protocolDayUserExercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const protocolDayUserExerciseWithIdOnly = await prisma.protocolDayUserExercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProtocolDayUserExerciseFindManyArgs>(args?: SelectSubset<T, ProtocolDayUserExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtocolDayUserExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProtocolDayUserExercise.
     * @param {ProtocolDayUserExerciseCreateArgs} args - Arguments to create a ProtocolDayUserExercise.
     * @example
     * // Create one ProtocolDayUserExercise
     * const ProtocolDayUserExercise = await prisma.protocolDayUserExercise.create({
     *   data: {
     *     // ... data to create a ProtocolDayUserExercise
     *   }
     * })
     * 
     */
    create<T extends ProtocolDayUserExerciseCreateArgs>(args: SelectSubset<T, ProtocolDayUserExerciseCreateArgs<ExtArgs>>): Prisma__ProtocolDayUserExerciseClient<$Result.GetResult<Prisma.$ProtocolDayUserExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProtocolDayUserExercises.
     * @param {ProtocolDayUserExerciseCreateManyArgs} args - Arguments to create many ProtocolDayUserExercises.
     * @example
     * // Create many ProtocolDayUserExercises
     * const protocolDayUserExercise = await prisma.protocolDayUserExercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProtocolDayUserExerciseCreateManyArgs>(args?: SelectSubset<T, ProtocolDayUserExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProtocolDayUserExercises and returns the data saved in the database.
     * @param {ProtocolDayUserExerciseCreateManyAndReturnArgs} args - Arguments to create many ProtocolDayUserExercises.
     * @example
     * // Create many ProtocolDayUserExercises
     * const protocolDayUserExercise = await prisma.protocolDayUserExercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProtocolDayUserExercises and only return the `id`
     * const protocolDayUserExerciseWithIdOnly = await prisma.protocolDayUserExercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProtocolDayUserExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ProtocolDayUserExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtocolDayUserExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProtocolDayUserExercise.
     * @param {ProtocolDayUserExerciseDeleteArgs} args - Arguments to delete one ProtocolDayUserExercise.
     * @example
     * // Delete one ProtocolDayUserExercise
     * const ProtocolDayUserExercise = await prisma.protocolDayUserExercise.delete({
     *   where: {
     *     // ... filter to delete one ProtocolDayUserExercise
     *   }
     * })
     * 
     */
    delete<T extends ProtocolDayUserExerciseDeleteArgs>(args: SelectSubset<T, ProtocolDayUserExerciseDeleteArgs<ExtArgs>>): Prisma__ProtocolDayUserExerciseClient<$Result.GetResult<Prisma.$ProtocolDayUserExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProtocolDayUserExercise.
     * @param {ProtocolDayUserExerciseUpdateArgs} args - Arguments to update one ProtocolDayUserExercise.
     * @example
     * // Update one ProtocolDayUserExercise
     * const protocolDayUserExercise = await prisma.protocolDayUserExercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProtocolDayUserExerciseUpdateArgs>(args: SelectSubset<T, ProtocolDayUserExerciseUpdateArgs<ExtArgs>>): Prisma__ProtocolDayUserExerciseClient<$Result.GetResult<Prisma.$ProtocolDayUserExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProtocolDayUserExercises.
     * @param {ProtocolDayUserExerciseDeleteManyArgs} args - Arguments to filter ProtocolDayUserExercises to delete.
     * @example
     * // Delete a few ProtocolDayUserExercises
     * const { count } = await prisma.protocolDayUserExercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProtocolDayUserExerciseDeleteManyArgs>(args?: SelectSubset<T, ProtocolDayUserExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProtocolDayUserExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolDayUserExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProtocolDayUserExercises
     * const protocolDayUserExercise = await prisma.protocolDayUserExercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProtocolDayUserExerciseUpdateManyArgs>(args: SelectSubset<T, ProtocolDayUserExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProtocolDayUserExercises and returns the data updated in the database.
     * @param {ProtocolDayUserExerciseUpdateManyAndReturnArgs} args - Arguments to update many ProtocolDayUserExercises.
     * @example
     * // Update many ProtocolDayUserExercises
     * const protocolDayUserExercise = await prisma.protocolDayUserExercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProtocolDayUserExercises and only return the `id`
     * const protocolDayUserExerciseWithIdOnly = await prisma.protocolDayUserExercise.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ProtocolDayUserExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, ProtocolDayUserExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtocolDayUserExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProtocolDayUserExercise.
     * @param {ProtocolDayUserExerciseUpsertArgs} args - Arguments to update or create a ProtocolDayUserExercise.
     * @example
     * // Update or create a ProtocolDayUserExercise
     * const protocolDayUserExercise = await prisma.protocolDayUserExercise.upsert({
     *   create: {
     *     // ... data to create a ProtocolDayUserExercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProtocolDayUserExercise we want to update
     *   }
     * })
     */
    upsert<T extends ProtocolDayUserExerciseUpsertArgs>(args: SelectSubset<T, ProtocolDayUserExerciseUpsertArgs<ExtArgs>>): Prisma__ProtocolDayUserExerciseClient<$Result.GetResult<Prisma.$ProtocolDayUserExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProtocolDayUserExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolDayUserExerciseCountArgs} args - Arguments to filter ProtocolDayUserExercises to count.
     * @example
     * // Count the number of ProtocolDayUserExercises
     * const count = await prisma.protocolDayUserExercise.count({
     *   where: {
     *     // ... the filter for the ProtocolDayUserExercises we want to count
     *   }
     * })
    **/
    count<T extends ProtocolDayUserExerciseCountArgs>(
      args?: Subset<T, ProtocolDayUserExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProtocolDayUserExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProtocolDayUserExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolDayUserExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProtocolDayUserExerciseAggregateArgs>(args: Subset<T, ProtocolDayUserExerciseAggregateArgs>): Prisma.PrismaPromise<GetProtocolDayUserExerciseAggregateType<T>>

    /**
     * Group by ProtocolDayUserExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolDayUserExerciseGroupByArgs} args - Group by arguments.
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
      T extends ProtocolDayUserExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProtocolDayUserExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ProtocolDayUserExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProtocolDayUserExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProtocolDayUserExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProtocolDayUserExercise model
   */
  readonly fields: ProtocolDayUserExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProtocolDayUserExercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProtocolDayUserExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userExercise<T extends UserExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserExerciseDefaultArgs<ExtArgs>>): Prisma__UserExerciseClient<$Result.GetResult<Prisma.$UserExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    protocolDay<T extends ProtocolDayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProtocolDayDefaultArgs<ExtArgs>>): Prisma__ProtocolDayClient<$Result.GetResult<Prisma.$ProtocolDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProtocolDayUserExercise model
   */
  interface ProtocolDayUserExerciseFieldRefs {
    readonly id: FieldRef<"ProtocolDayUserExercise", 'Int'>
    readonly userExerciseId: FieldRef<"ProtocolDayUserExercise", 'Int'>
    readonly protocolDayId: FieldRef<"ProtocolDayUserExercise", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProtocolDayUserExercise findUnique
   */
  export type ProtocolDayUserExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDayUserExercise
     */
    select?: ProtocolDayUserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDayUserExercise
     */
    omit?: ProtocolDayUserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayUserExerciseInclude<ExtArgs> | null
    /**
     * Filter, which ProtocolDayUserExercise to fetch.
     */
    where: ProtocolDayUserExerciseWhereUniqueInput
  }

  /**
   * ProtocolDayUserExercise findUniqueOrThrow
   */
  export type ProtocolDayUserExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDayUserExercise
     */
    select?: ProtocolDayUserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDayUserExercise
     */
    omit?: ProtocolDayUserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayUserExerciseInclude<ExtArgs> | null
    /**
     * Filter, which ProtocolDayUserExercise to fetch.
     */
    where: ProtocolDayUserExerciseWhereUniqueInput
  }

  /**
   * ProtocolDayUserExercise findFirst
   */
  export type ProtocolDayUserExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDayUserExercise
     */
    select?: ProtocolDayUserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDayUserExercise
     */
    omit?: ProtocolDayUserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayUserExerciseInclude<ExtArgs> | null
    /**
     * Filter, which ProtocolDayUserExercise to fetch.
     */
    where?: ProtocolDayUserExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProtocolDayUserExercises to fetch.
     */
    orderBy?: ProtocolDayUserExerciseOrderByWithRelationInput | ProtocolDayUserExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProtocolDayUserExercises.
     */
    cursor?: ProtocolDayUserExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProtocolDayUserExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProtocolDayUserExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProtocolDayUserExercises.
     */
    distinct?: ProtocolDayUserExerciseScalarFieldEnum | ProtocolDayUserExerciseScalarFieldEnum[]
  }

  /**
   * ProtocolDayUserExercise findFirstOrThrow
   */
  export type ProtocolDayUserExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDayUserExercise
     */
    select?: ProtocolDayUserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDayUserExercise
     */
    omit?: ProtocolDayUserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayUserExerciseInclude<ExtArgs> | null
    /**
     * Filter, which ProtocolDayUserExercise to fetch.
     */
    where?: ProtocolDayUserExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProtocolDayUserExercises to fetch.
     */
    orderBy?: ProtocolDayUserExerciseOrderByWithRelationInput | ProtocolDayUserExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProtocolDayUserExercises.
     */
    cursor?: ProtocolDayUserExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProtocolDayUserExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProtocolDayUserExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProtocolDayUserExercises.
     */
    distinct?: ProtocolDayUserExerciseScalarFieldEnum | ProtocolDayUserExerciseScalarFieldEnum[]
  }

  /**
   * ProtocolDayUserExercise findMany
   */
  export type ProtocolDayUserExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDayUserExercise
     */
    select?: ProtocolDayUserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDayUserExercise
     */
    omit?: ProtocolDayUserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayUserExerciseInclude<ExtArgs> | null
    /**
     * Filter, which ProtocolDayUserExercises to fetch.
     */
    where?: ProtocolDayUserExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProtocolDayUserExercises to fetch.
     */
    orderBy?: ProtocolDayUserExerciseOrderByWithRelationInput | ProtocolDayUserExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProtocolDayUserExercises.
     */
    cursor?: ProtocolDayUserExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProtocolDayUserExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProtocolDayUserExercises.
     */
    skip?: number
    distinct?: ProtocolDayUserExerciseScalarFieldEnum | ProtocolDayUserExerciseScalarFieldEnum[]
  }

  /**
   * ProtocolDayUserExercise create
   */
  export type ProtocolDayUserExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDayUserExercise
     */
    select?: ProtocolDayUserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDayUserExercise
     */
    omit?: ProtocolDayUserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayUserExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a ProtocolDayUserExercise.
     */
    data: XOR<ProtocolDayUserExerciseCreateInput, ProtocolDayUserExerciseUncheckedCreateInput>
  }

  /**
   * ProtocolDayUserExercise createMany
   */
  export type ProtocolDayUserExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProtocolDayUserExercises.
     */
    data: ProtocolDayUserExerciseCreateManyInput | ProtocolDayUserExerciseCreateManyInput[]
  }

  /**
   * ProtocolDayUserExercise createManyAndReturn
   */
  export type ProtocolDayUserExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDayUserExercise
     */
    select?: ProtocolDayUserExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDayUserExercise
     */
    omit?: ProtocolDayUserExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many ProtocolDayUserExercises.
     */
    data: ProtocolDayUserExerciseCreateManyInput | ProtocolDayUserExerciseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayUserExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProtocolDayUserExercise update
   */
  export type ProtocolDayUserExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDayUserExercise
     */
    select?: ProtocolDayUserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDayUserExercise
     */
    omit?: ProtocolDayUserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayUserExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a ProtocolDayUserExercise.
     */
    data: XOR<ProtocolDayUserExerciseUpdateInput, ProtocolDayUserExerciseUncheckedUpdateInput>
    /**
     * Choose, which ProtocolDayUserExercise to update.
     */
    where: ProtocolDayUserExerciseWhereUniqueInput
  }

  /**
   * ProtocolDayUserExercise updateMany
   */
  export type ProtocolDayUserExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProtocolDayUserExercises.
     */
    data: XOR<ProtocolDayUserExerciseUpdateManyMutationInput, ProtocolDayUserExerciseUncheckedUpdateManyInput>
    /**
     * Filter which ProtocolDayUserExercises to update
     */
    where?: ProtocolDayUserExerciseWhereInput
    /**
     * Limit how many ProtocolDayUserExercises to update.
     */
    limit?: number
  }

  /**
   * ProtocolDayUserExercise updateManyAndReturn
   */
  export type ProtocolDayUserExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDayUserExercise
     */
    select?: ProtocolDayUserExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDayUserExercise
     */
    omit?: ProtocolDayUserExerciseOmit<ExtArgs> | null
    /**
     * The data used to update ProtocolDayUserExercises.
     */
    data: XOR<ProtocolDayUserExerciseUpdateManyMutationInput, ProtocolDayUserExerciseUncheckedUpdateManyInput>
    /**
     * Filter which ProtocolDayUserExercises to update
     */
    where?: ProtocolDayUserExerciseWhereInput
    /**
     * Limit how many ProtocolDayUserExercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayUserExerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProtocolDayUserExercise upsert
   */
  export type ProtocolDayUserExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDayUserExercise
     */
    select?: ProtocolDayUserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDayUserExercise
     */
    omit?: ProtocolDayUserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayUserExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the ProtocolDayUserExercise to update in case it exists.
     */
    where: ProtocolDayUserExerciseWhereUniqueInput
    /**
     * In case the ProtocolDayUserExercise found by the `where` argument doesn't exist, create a new ProtocolDayUserExercise with this data.
     */
    create: XOR<ProtocolDayUserExerciseCreateInput, ProtocolDayUserExerciseUncheckedCreateInput>
    /**
     * In case the ProtocolDayUserExercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProtocolDayUserExerciseUpdateInput, ProtocolDayUserExerciseUncheckedUpdateInput>
  }

  /**
   * ProtocolDayUserExercise delete
   */
  export type ProtocolDayUserExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDayUserExercise
     */
    select?: ProtocolDayUserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDayUserExercise
     */
    omit?: ProtocolDayUserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayUserExerciseInclude<ExtArgs> | null
    /**
     * Filter which ProtocolDayUserExercise to delete.
     */
    where: ProtocolDayUserExerciseWhereUniqueInput
  }

  /**
   * ProtocolDayUserExercise deleteMany
   */
  export type ProtocolDayUserExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProtocolDayUserExercises to delete
     */
    where?: ProtocolDayUserExerciseWhereInput
    /**
     * Limit how many ProtocolDayUserExercises to delete.
     */
    limit?: number
  }

  /**
   * ProtocolDayUserExercise without action
   */
  export type ProtocolDayUserExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolDayUserExercise
     */
    select?: ProtocolDayUserExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProtocolDayUserExercise
     */
    omit?: ProtocolDayUserExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolDayUserExerciseInclude<ExtArgs> | null
  }


  /**
   * Model WeightRecord
   */

  export type AggregateWeightRecord = {
    _count: WeightRecordCountAggregateOutputType | null
    _avg: WeightRecordAvgAggregateOutputType | null
    _sum: WeightRecordSumAggregateOutputType | null
    _min: WeightRecordMinAggregateOutputType | null
    _max: WeightRecordMaxAggregateOutputType | null
  }

  export type WeightRecordAvgAggregateOutputType = {
    id: number | null
    value: number | null
    smooth: number | null
    weightProgramId: number | null
  }

  export type WeightRecordSumAggregateOutputType = {
    id: number | null
    value: number | null
    smooth: number | null
    weightProgramId: number | null
  }

  export type WeightRecordMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    value: number | null
    smooth: number | null
    weightProgramId: number | null
  }

  export type WeightRecordMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    value: number | null
    smooth: number | null
    weightProgramId: number | null
  }

  export type WeightRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    value: number
    smooth: number
    weightProgramId: number
    _all: number
  }


  export type WeightRecordAvgAggregateInputType = {
    id?: true
    value?: true
    smooth?: true
    weightProgramId?: true
  }

  export type WeightRecordSumAggregateInputType = {
    id?: true
    value?: true
    smooth?: true
    weightProgramId?: true
  }

  export type WeightRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    value?: true
    smooth?: true
    weightProgramId?: true
  }

  export type WeightRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    value?: true
    smooth?: true
    weightProgramId?: true
  }

  export type WeightRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    value?: true
    smooth?: true
    weightProgramId?: true
    _all?: true
  }

  export type WeightRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeightRecord to aggregate.
     */
    where?: WeightRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightRecords to fetch.
     */
    orderBy?: WeightRecordOrderByWithRelationInput | WeightRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeightRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeightRecords
    **/
    _count?: true | WeightRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeightRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeightRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeightRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeightRecordMaxAggregateInputType
  }

  export type GetWeightRecordAggregateType<T extends WeightRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateWeightRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeightRecord[P]>
      : GetScalarType<T[P], AggregateWeightRecord[P]>
  }




  export type WeightRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeightRecordWhereInput
    orderBy?: WeightRecordOrderByWithAggregationInput | WeightRecordOrderByWithAggregationInput[]
    by: WeightRecordScalarFieldEnum[] | WeightRecordScalarFieldEnum
    having?: WeightRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeightRecordCountAggregateInputType | true
    _avg?: WeightRecordAvgAggregateInputType
    _sum?: WeightRecordSumAggregateInputType
    _min?: WeightRecordMinAggregateInputType
    _max?: WeightRecordMaxAggregateInputType
  }

  export type WeightRecordGroupByOutputType = {
    id: number
    createdAt: Date
    value: number
    smooth: number
    weightProgramId: number
    _count: WeightRecordCountAggregateOutputType | null
    _avg: WeightRecordAvgAggregateOutputType | null
    _sum: WeightRecordSumAggregateOutputType | null
    _min: WeightRecordMinAggregateOutputType | null
    _max: WeightRecordMaxAggregateOutputType | null
  }

  type GetWeightRecordGroupByPayload<T extends WeightRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeightRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeightRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeightRecordGroupByOutputType[P]>
            : GetScalarType<T[P], WeightRecordGroupByOutputType[P]>
        }
      >
    >


  export type WeightRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    value?: boolean
    smooth?: boolean
    weightProgramId?: boolean
    weightProgram?: boolean | WeightProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weightRecord"]>

  export type WeightRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    value?: boolean
    smooth?: boolean
    weightProgramId?: boolean
    weightProgram?: boolean | WeightProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weightRecord"]>

  export type WeightRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    value?: boolean
    smooth?: boolean
    weightProgramId?: boolean
    weightProgram?: boolean | WeightProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weightRecord"]>

  export type WeightRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    value?: boolean
    smooth?: boolean
    weightProgramId?: boolean
  }

  export type WeightRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "value" | "smooth" | "weightProgramId", ExtArgs["result"]["weightRecord"]>
  export type WeightRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weightProgram?: boolean | WeightProgramDefaultArgs<ExtArgs>
  }
  export type WeightRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weightProgram?: boolean | WeightProgramDefaultArgs<ExtArgs>
  }
  export type WeightRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weightProgram?: boolean | WeightProgramDefaultArgs<ExtArgs>
  }

  export type $WeightRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeightRecord"
    objects: {
      weightProgram: Prisma.$WeightProgramPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      value: number
      smooth: number
      weightProgramId: number
    }, ExtArgs["result"]["weightRecord"]>
    composites: {}
  }

  type WeightRecordGetPayload<S extends boolean | null | undefined | WeightRecordDefaultArgs> = $Result.GetResult<Prisma.$WeightRecordPayload, S>

  type WeightRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeightRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeightRecordCountAggregateInputType | true
    }

  export interface WeightRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeightRecord'], meta: { name: 'WeightRecord' } }
    /**
     * Find zero or one WeightRecord that matches the filter.
     * @param {WeightRecordFindUniqueArgs} args - Arguments to find a WeightRecord
     * @example
     * // Get one WeightRecord
     * const weightRecord = await prisma.weightRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeightRecordFindUniqueArgs>(args: SelectSubset<T, WeightRecordFindUniqueArgs<ExtArgs>>): Prisma__WeightRecordClient<$Result.GetResult<Prisma.$WeightRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeightRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeightRecordFindUniqueOrThrowArgs} args - Arguments to find a WeightRecord
     * @example
     * // Get one WeightRecord
     * const weightRecord = await prisma.weightRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeightRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, WeightRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeightRecordClient<$Result.GetResult<Prisma.$WeightRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeightRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightRecordFindFirstArgs} args - Arguments to find a WeightRecord
     * @example
     * // Get one WeightRecord
     * const weightRecord = await prisma.weightRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeightRecordFindFirstArgs>(args?: SelectSubset<T, WeightRecordFindFirstArgs<ExtArgs>>): Prisma__WeightRecordClient<$Result.GetResult<Prisma.$WeightRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeightRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightRecordFindFirstOrThrowArgs} args - Arguments to find a WeightRecord
     * @example
     * // Get one WeightRecord
     * const weightRecord = await prisma.weightRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeightRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, WeightRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeightRecordClient<$Result.GetResult<Prisma.$WeightRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeightRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeightRecords
     * const weightRecords = await prisma.weightRecord.findMany()
     * 
     * // Get first 10 WeightRecords
     * const weightRecords = await prisma.weightRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weightRecordWithIdOnly = await prisma.weightRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeightRecordFindManyArgs>(args?: SelectSubset<T, WeightRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeightRecord.
     * @param {WeightRecordCreateArgs} args - Arguments to create a WeightRecord.
     * @example
     * // Create one WeightRecord
     * const WeightRecord = await prisma.weightRecord.create({
     *   data: {
     *     // ... data to create a WeightRecord
     *   }
     * })
     * 
     */
    create<T extends WeightRecordCreateArgs>(args: SelectSubset<T, WeightRecordCreateArgs<ExtArgs>>): Prisma__WeightRecordClient<$Result.GetResult<Prisma.$WeightRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeightRecords.
     * @param {WeightRecordCreateManyArgs} args - Arguments to create many WeightRecords.
     * @example
     * // Create many WeightRecords
     * const weightRecord = await prisma.weightRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeightRecordCreateManyArgs>(args?: SelectSubset<T, WeightRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeightRecords and returns the data saved in the database.
     * @param {WeightRecordCreateManyAndReturnArgs} args - Arguments to create many WeightRecords.
     * @example
     * // Create many WeightRecords
     * const weightRecord = await prisma.weightRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeightRecords and only return the `id`
     * const weightRecordWithIdOnly = await prisma.weightRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeightRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, WeightRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeightRecord.
     * @param {WeightRecordDeleteArgs} args - Arguments to delete one WeightRecord.
     * @example
     * // Delete one WeightRecord
     * const WeightRecord = await prisma.weightRecord.delete({
     *   where: {
     *     // ... filter to delete one WeightRecord
     *   }
     * })
     * 
     */
    delete<T extends WeightRecordDeleteArgs>(args: SelectSubset<T, WeightRecordDeleteArgs<ExtArgs>>): Prisma__WeightRecordClient<$Result.GetResult<Prisma.$WeightRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeightRecord.
     * @param {WeightRecordUpdateArgs} args - Arguments to update one WeightRecord.
     * @example
     * // Update one WeightRecord
     * const weightRecord = await prisma.weightRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeightRecordUpdateArgs>(args: SelectSubset<T, WeightRecordUpdateArgs<ExtArgs>>): Prisma__WeightRecordClient<$Result.GetResult<Prisma.$WeightRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeightRecords.
     * @param {WeightRecordDeleteManyArgs} args - Arguments to filter WeightRecords to delete.
     * @example
     * // Delete a few WeightRecords
     * const { count } = await prisma.weightRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeightRecordDeleteManyArgs>(args?: SelectSubset<T, WeightRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeightRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeightRecords
     * const weightRecord = await prisma.weightRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeightRecordUpdateManyArgs>(args: SelectSubset<T, WeightRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeightRecords and returns the data updated in the database.
     * @param {WeightRecordUpdateManyAndReturnArgs} args - Arguments to update many WeightRecords.
     * @example
     * // Update many WeightRecords
     * const weightRecord = await prisma.weightRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeightRecords and only return the `id`
     * const weightRecordWithIdOnly = await prisma.weightRecord.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends WeightRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, WeightRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeightRecord.
     * @param {WeightRecordUpsertArgs} args - Arguments to update or create a WeightRecord.
     * @example
     * // Update or create a WeightRecord
     * const weightRecord = await prisma.weightRecord.upsert({
     *   create: {
     *     // ... data to create a WeightRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeightRecord we want to update
     *   }
     * })
     */
    upsert<T extends WeightRecordUpsertArgs>(args: SelectSubset<T, WeightRecordUpsertArgs<ExtArgs>>): Prisma__WeightRecordClient<$Result.GetResult<Prisma.$WeightRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeightRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightRecordCountArgs} args - Arguments to filter WeightRecords to count.
     * @example
     * // Count the number of WeightRecords
     * const count = await prisma.weightRecord.count({
     *   where: {
     *     // ... the filter for the WeightRecords we want to count
     *   }
     * })
    **/
    count<T extends WeightRecordCountArgs>(
      args?: Subset<T, WeightRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeightRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeightRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeightRecordAggregateArgs>(args: Subset<T, WeightRecordAggregateArgs>): Prisma.PrismaPromise<GetWeightRecordAggregateType<T>>

    /**
     * Group by WeightRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightRecordGroupByArgs} args - Group by arguments.
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
      T extends WeightRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeightRecordGroupByArgs['orderBy'] }
        : { orderBy?: WeightRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeightRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeightRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeightRecord model
   */
  readonly fields: WeightRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeightRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeightRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    weightProgram<T extends WeightProgramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeightProgramDefaultArgs<ExtArgs>>): Prisma__WeightProgramClient<$Result.GetResult<Prisma.$WeightProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WeightRecord model
   */
  interface WeightRecordFieldRefs {
    readonly id: FieldRef<"WeightRecord", 'Int'>
    readonly createdAt: FieldRef<"WeightRecord", 'DateTime'>
    readonly value: FieldRef<"WeightRecord", 'Float'>
    readonly smooth: FieldRef<"WeightRecord", 'Float'>
    readonly weightProgramId: FieldRef<"WeightRecord", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WeightRecord findUnique
   */
  export type WeightRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightRecord
     */
    select?: WeightRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightRecord
     */
    omit?: WeightRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightRecordInclude<ExtArgs> | null
    /**
     * Filter, which WeightRecord to fetch.
     */
    where: WeightRecordWhereUniqueInput
  }

  /**
   * WeightRecord findUniqueOrThrow
   */
  export type WeightRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightRecord
     */
    select?: WeightRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightRecord
     */
    omit?: WeightRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightRecordInclude<ExtArgs> | null
    /**
     * Filter, which WeightRecord to fetch.
     */
    where: WeightRecordWhereUniqueInput
  }

  /**
   * WeightRecord findFirst
   */
  export type WeightRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightRecord
     */
    select?: WeightRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightRecord
     */
    omit?: WeightRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightRecordInclude<ExtArgs> | null
    /**
     * Filter, which WeightRecord to fetch.
     */
    where?: WeightRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightRecords to fetch.
     */
    orderBy?: WeightRecordOrderByWithRelationInput | WeightRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeightRecords.
     */
    cursor?: WeightRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeightRecords.
     */
    distinct?: WeightRecordScalarFieldEnum | WeightRecordScalarFieldEnum[]
  }

  /**
   * WeightRecord findFirstOrThrow
   */
  export type WeightRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightRecord
     */
    select?: WeightRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightRecord
     */
    omit?: WeightRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightRecordInclude<ExtArgs> | null
    /**
     * Filter, which WeightRecord to fetch.
     */
    where?: WeightRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightRecords to fetch.
     */
    orderBy?: WeightRecordOrderByWithRelationInput | WeightRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeightRecords.
     */
    cursor?: WeightRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeightRecords.
     */
    distinct?: WeightRecordScalarFieldEnum | WeightRecordScalarFieldEnum[]
  }

  /**
   * WeightRecord findMany
   */
  export type WeightRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightRecord
     */
    select?: WeightRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightRecord
     */
    omit?: WeightRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightRecordInclude<ExtArgs> | null
    /**
     * Filter, which WeightRecords to fetch.
     */
    where?: WeightRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightRecords to fetch.
     */
    orderBy?: WeightRecordOrderByWithRelationInput | WeightRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeightRecords.
     */
    cursor?: WeightRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightRecords.
     */
    skip?: number
    distinct?: WeightRecordScalarFieldEnum | WeightRecordScalarFieldEnum[]
  }

  /**
   * WeightRecord create
   */
  export type WeightRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightRecord
     */
    select?: WeightRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightRecord
     */
    omit?: WeightRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a WeightRecord.
     */
    data: XOR<WeightRecordCreateInput, WeightRecordUncheckedCreateInput>
  }

  /**
   * WeightRecord createMany
   */
  export type WeightRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeightRecords.
     */
    data: WeightRecordCreateManyInput | WeightRecordCreateManyInput[]
  }

  /**
   * WeightRecord createManyAndReturn
   */
  export type WeightRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightRecord
     */
    select?: WeightRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeightRecord
     */
    omit?: WeightRecordOmit<ExtArgs> | null
    /**
     * The data used to create many WeightRecords.
     */
    data: WeightRecordCreateManyInput | WeightRecordCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeightRecord update
   */
  export type WeightRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightRecord
     */
    select?: WeightRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightRecord
     */
    omit?: WeightRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a WeightRecord.
     */
    data: XOR<WeightRecordUpdateInput, WeightRecordUncheckedUpdateInput>
    /**
     * Choose, which WeightRecord to update.
     */
    where: WeightRecordWhereUniqueInput
  }

  /**
   * WeightRecord updateMany
   */
  export type WeightRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeightRecords.
     */
    data: XOR<WeightRecordUpdateManyMutationInput, WeightRecordUncheckedUpdateManyInput>
    /**
     * Filter which WeightRecords to update
     */
    where?: WeightRecordWhereInput
    /**
     * Limit how many WeightRecords to update.
     */
    limit?: number
  }

  /**
   * WeightRecord updateManyAndReturn
   */
  export type WeightRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightRecord
     */
    select?: WeightRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeightRecord
     */
    omit?: WeightRecordOmit<ExtArgs> | null
    /**
     * The data used to update WeightRecords.
     */
    data: XOR<WeightRecordUpdateManyMutationInput, WeightRecordUncheckedUpdateManyInput>
    /**
     * Filter which WeightRecords to update
     */
    where?: WeightRecordWhereInput
    /**
     * Limit how many WeightRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeightRecord upsert
   */
  export type WeightRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightRecord
     */
    select?: WeightRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightRecord
     */
    omit?: WeightRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the WeightRecord to update in case it exists.
     */
    where: WeightRecordWhereUniqueInput
    /**
     * In case the WeightRecord found by the `where` argument doesn't exist, create a new WeightRecord with this data.
     */
    create: XOR<WeightRecordCreateInput, WeightRecordUncheckedCreateInput>
    /**
     * In case the WeightRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeightRecordUpdateInput, WeightRecordUncheckedUpdateInput>
  }

  /**
   * WeightRecord delete
   */
  export type WeightRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightRecord
     */
    select?: WeightRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightRecord
     */
    omit?: WeightRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightRecordInclude<ExtArgs> | null
    /**
     * Filter which WeightRecord to delete.
     */
    where: WeightRecordWhereUniqueInput
  }

  /**
   * WeightRecord deleteMany
   */
  export type WeightRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeightRecords to delete
     */
    where?: WeightRecordWhereInput
    /**
     * Limit how many WeightRecords to delete.
     */
    limit?: number
  }

  /**
   * WeightRecord without action
   */
  export type WeightRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightRecord
     */
    select?: WeightRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightRecord
     */
    omit?: WeightRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightRecordInclude<ExtArgs> | null
  }


  /**
   * Model WeightProgram
   */

  export type AggregateWeightProgram = {
    _count: WeightProgramCountAggregateOutputType | null
    _avg: WeightProgramAvgAggregateOutputType | null
    _sum: WeightProgramSumAggregateOutputType | null
    _min: WeightProgramMinAggregateOutputType | null
    _max: WeightProgramMaxAggregateOutputType | null
  }

  export type WeightProgramAvgAggregateOutputType = {
    id: number | null
    goalWeight: number | null
    userId: number | null
  }

  export type WeightProgramSumAggregateOutputType = {
    id: number | null
    goalWeight: number | null
    userId: number | null
  }

  export type WeightProgramMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    active: boolean | null
    goalWeight: number | null
    mode: string | null
    userId: number | null
  }

  export type WeightProgramMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    active: boolean | null
    goalWeight: number | null
    mode: string | null
    userId: number | null
  }

  export type WeightProgramCountAggregateOutputType = {
    id: number
    createdAt: number
    active: number
    goalWeight: number
    mode: number
    userId: number
    _all: number
  }


  export type WeightProgramAvgAggregateInputType = {
    id?: true
    goalWeight?: true
    userId?: true
  }

  export type WeightProgramSumAggregateInputType = {
    id?: true
    goalWeight?: true
    userId?: true
  }

  export type WeightProgramMinAggregateInputType = {
    id?: true
    createdAt?: true
    active?: true
    goalWeight?: true
    mode?: true
    userId?: true
  }

  export type WeightProgramMaxAggregateInputType = {
    id?: true
    createdAt?: true
    active?: true
    goalWeight?: true
    mode?: true
    userId?: true
  }

  export type WeightProgramCountAggregateInputType = {
    id?: true
    createdAt?: true
    active?: true
    goalWeight?: true
    mode?: true
    userId?: true
    _all?: true
  }

  export type WeightProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeightProgram to aggregate.
     */
    where?: WeightProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightPrograms to fetch.
     */
    orderBy?: WeightProgramOrderByWithRelationInput | WeightProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeightProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeightPrograms
    **/
    _count?: true | WeightProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeightProgramAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeightProgramSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeightProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeightProgramMaxAggregateInputType
  }

  export type GetWeightProgramAggregateType<T extends WeightProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateWeightProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeightProgram[P]>
      : GetScalarType<T[P], AggregateWeightProgram[P]>
  }




  export type WeightProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeightProgramWhereInput
    orderBy?: WeightProgramOrderByWithAggregationInput | WeightProgramOrderByWithAggregationInput[]
    by: WeightProgramScalarFieldEnum[] | WeightProgramScalarFieldEnum
    having?: WeightProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeightProgramCountAggregateInputType | true
    _avg?: WeightProgramAvgAggregateInputType
    _sum?: WeightProgramSumAggregateInputType
    _min?: WeightProgramMinAggregateInputType
    _max?: WeightProgramMaxAggregateInputType
  }

  export type WeightProgramGroupByOutputType = {
    id: number
    createdAt: Date
    active: boolean
    goalWeight: number
    mode: string
    userId: number
    _count: WeightProgramCountAggregateOutputType | null
    _avg: WeightProgramAvgAggregateOutputType | null
    _sum: WeightProgramSumAggregateOutputType | null
    _min: WeightProgramMinAggregateOutputType | null
    _max: WeightProgramMaxAggregateOutputType | null
  }

  type GetWeightProgramGroupByPayload<T extends WeightProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeightProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeightProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeightProgramGroupByOutputType[P]>
            : GetScalarType<T[P], WeightProgramGroupByOutputType[P]>
        }
      >
    >


  export type WeightProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    active?: boolean
    goalWeight?: boolean
    mode?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    weightRecords?: boolean | WeightProgram$weightRecordsArgs<ExtArgs>
    _count?: boolean | WeightProgramCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weightProgram"]>

  export type WeightProgramSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    active?: boolean
    goalWeight?: boolean
    mode?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weightProgram"]>

  export type WeightProgramSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    active?: boolean
    goalWeight?: boolean
    mode?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weightProgram"]>

  export type WeightProgramSelectScalar = {
    id?: boolean
    createdAt?: boolean
    active?: boolean
    goalWeight?: boolean
    mode?: boolean
    userId?: boolean
  }

  export type WeightProgramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "active" | "goalWeight" | "mode" | "userId", ExtArgs["result"]["weightProgram"]>
  export type WeightProgramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    weightRecords?: boolean | WeightProgram$weightRecordsArgs<ExtArgs>
    _count?: boolean | WeightProgramCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WeightProgramIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeightProgramIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WeightProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeightProgram"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      weightRecords: Prisma.$WeightRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      active: boolean
      goalWeight: number
      mode: string
      userId: number
    }, ExtArgs["result"]["weightProgram"]>
    composites: {}
  }

  type WeightProgramGetPayload<S extends boolean | null | undefined | WeightProgramDefaultArgs> = $Result.GetResult<Prisma.$WeightProgramPayload, S>

  type WeightProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeightProgramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeightProgramCountAggregateInputType | true
    }

  export interface WeightProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeightProgram'], meta: { name: 'WeightProgram' } }
    /**
     * Find zero or one WeightProgram that matches the filter.
     * @param {WeightProgramFindUniqueArgs} args - Arguments to find a WeightProgram
     * @example
     * // Get one WeightProgram
     * const weightProgram = await prisma.weightProgram.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeightProgramFindUniqueArgs>(args: SelectSubset<T, WeightProgramFindUniqueArgs<ExtArgs>>): Prisma__WeightProgramClient<$Result.GetResult<Prisma.$WeightProgramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeightProgram that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeightProgramFindUniqueOrThrowArgs} args - Arguments to find a WeightProgram
     * @example
     * // Get one WeightProgram
     * const weightProgram = await prisma.weightProgram.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeightProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, WeightProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeightProgramClient<$Result.GetResult<Prisma.$WeightProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeightProgram that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightProgramFindFirstArgs} args - Arguments to find a WeightProgram
     * @example
     * // Get one WeightProgram
     * const weightProgram = await prisma.weightProgram.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeightProgramFindFirstArgs>(args?: SelectSubset<T, WeightProgramFindFirstArgs<ExtArgs>>): Prisma__WeightProgramClient<$Result.GetResult<Prisma.$WeightProgramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeightProgram that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightProgramFindFirstOrThrowArgs} args - Arguments to find a WeightProgram
     * @example
     * // Get one WeightProgram
     * const weightProgram = await prisma.weightProgram.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeightProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, WeightProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeightProgramClient<$Result.GetResult<Prisma.$WeightProgramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeightPrograms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeightPrograms
     * const weightPrograms = await prisma.weightProgram.findMany()
     * 
     * // Get first 10 WeightPrograms
     * const weightPrograms = await prisma.weightProgram.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weightProgramWithIdOnly = await prisma.weightProgram.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeightProgramFindManyArgs>(args?: SelectSubset<T, WeightProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeightProgram.
     * @param {WeightProgramCreateArgs} args - Arguments to create a WeightProgram.
     * @example
     * // Create one WeightProgram
     * const WeightProgram = await prisma.weightProgram.create({
     *   data: {
     *     // ... data to create a WeightProgram
     *   }
     * })
     * 
     */
    create<T extends WeightProgramCreateArgs>(args: SelectSubset<T, WeightProgramCreateArgs<ExtArgs>>): Prisma__WeightProgramClient<$Result.GetResult<Prisma.$WeightProgramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeightPrograms.
     * @param {WeightProgramCreateManyArgs} args - Arguments to create many WeightPrograms.
     * @example
     * // Create many WeightPrograms
     * const weightProgram = await prisma.weightProgram.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeightProgramCreateManyArgs>(args?: SelectSubset<T, WeightProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeightPrograms and returns the data saved in the database.
     * @param {WeightProgramCreateManyAndReturnArgs} args - Arguments to create many WeightPrograms.
     * @example
     * // Create many WeightPrograms
     * const weightProgram = await prisma.weightProgram.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeightPrograms and only return the `id`
     * const weightProgramWithIdOnly = await prisma.weightProgram.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeightProgramCreateManyAndReturnArgs>(args?: SelectSubset<T, WeightProgramCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightProgramPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeightProgram.
     * @param {WeightProgramDeleteArgs} args - Arguments to delete one WeightProgram.
     * @example
     * // Delete one WeightProgram
     * const WeightProgram = await prisma.weightProgram.delete({
     *   where: {
     *     // ... filter to delete one WeightProgram
     *   }
     * })
     * 
     */
    delete<T extends WeightProgramDeleteArgs>(args: SelectSubset<T, WeightProgramDeleteArgs<ExtArgs>>): Prisma__WeightProgramClient<$Result.GetResult<Prisma.$WeightProgramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeightProgram.
     * @param {WeightProgramUpdateArgs} args - Arguments to update one WeightProgram.
     * @example
     * // Update one WeightProgram
     * const weightProgram = await prisma.weightProgram.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeightProgramUpdateArgs>(args: SelectSubset<T, WeightProgramUpdateArgs<ExtArgs>>): Prisma__WeightProgramClient<$Result.GetResult<Prisma.$WeightProgramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeightPrograms.
     * @param {WeightProgramDeleteManyArgs} args - Arguments to filter WeightPrograms to delete.
     * @example
     * // Delete a few WeightPrograms
     * const { count } = await prisma.weightProgram.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeightProgramDeleteManyArgs>(args?: SelectSubset<T, WeightProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeightPrograms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeightPrograms
     * const weightProgram = await prisma.weightProgram.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeightProgramUpdateManyArgs>(args: SelectSubset<T, WeightProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeightPrograms and returns the data updated in the database.
     * @param {WeightProgramUpdateManyAndReturnArgs} args - Arguments to update many WeightPrograms.
     * @example
     * // Update many WeightPrograms
     * const weightProgram = await prisma.weightProgram.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeightPrograms and only return the `id`
     * const weightProgramWithIdOnly = await prisma.weightProgram.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends WeightProgramUpdateManyAndReturnArgs>(args: SelectSubset<T, WeightProgramUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightProgramPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeightProgram.
     * @param {WeightProgramUpsertArgs} args - Arguments to update or create a WeightProgram.
     * @example
     * // Update or create a WeightProgram
     * const weightProgram = await prisma.weightProgram.upsert({
     *   create: {
     *     // ... data to create a WeightProgram
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeightProgram we want to update
     *   }
     * })
     */
    upsert<T extends WeightProgramUpsertArgs>(args: SelectSubset<T, WeightProgramUpsertArgs<ExtArgs>>): Prisma__WeightProgramClient<$Result.GetResult<Prisma.$WeightProgramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeightPrograms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightProgramCountArgs} args - Arguments to filter WeightPrograms to count.
     * @example
     * // Count the number of WeightPrograms
     * const count = await prisma.weightProgram.count({
     *   where: {
     *     // ... the filter for the WeightPrograms we want to count
     *   }
     * })
    **/
    count<T extends WeightProgramCountArgs>(
      args?: Subset<T, WeightProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeightProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeightProgram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeightProgramAggregateArgs>(args: Subset<T, WeightProgramAggregateArgs>): Prisma.PrismaPromise<GetWeightProgramAggregateType<T>>

    /**
     * Group by WeightProgram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightProgramGroupByArgs} args - Group by arguments.
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
      T extends WeightProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeightProgramGroupByArgs['orderBy'] }
        : { orderBy?: WeightProgramGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeightProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeightProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeightProgram model
   */
  readonly fields: WeightProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeightProgram.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeightProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    weightRecords<T extends WeightProgram$weightRecordsArgs<ExtArgs> = {}>(args?: Subset<T, WeightProgram$weightRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WeightProgram model
   */
  interface WeightProgramFieldRefs {
    readonly id: FieldRef<"WeightProgram", 'Int'>
    readonly createdAt: FieldRef<"WeightProgram", 'DateTime'>
    readonly active: FieldRef<"WeightProgram", 'Boolean'>
    readonly goalWeight: FieldRef<"WeightProgram", 'Float'>
    readonly mode: FieldRef<"WeightProgram", 'String'>
    readonly userId: FieldRef<"WeightProgram", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WeightProgram findUnique
   */
  export type WeightProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightProgram
     */
    select?: WeightProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightProgram
     */
    omit?: WeightProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightProgramInclude<ExtArgs> | null
    /**
     * Filter, which WeightProgram to fetch.
     */
    where: WeightProgramWhereUniqueInput
  }

  /**
   * WeightProgram findUniqueOrThrow
   */
  export type WeightProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightProgram
     */
    select?: WeightProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightProgram
     */
    omit?: WeightProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightProgramInclude<ExtArgs> | null
    /**
     * Filter, which WeightProgram to fetch.
     */
    where: WeightProgramWhereUniqueInput
  }

  /**
   * WeightProgram findFirst
   */
  export type WeightProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightProgram
     */
    select?: WeightProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightProgram
     */
    omit?: WeightProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightProgramInclude<ExtArgs> | null
    /**
     * Filter, which WeightProgram to fetch.
     */
    where?: WeightProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightPrograms to fetch.
     */
    orderBy?: WeightProgramOrderByWithRelationInput | WeightProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeightPrograms.
     */
    cursor?: WeightProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeightPrograms.
     */
    distinct?: WeightProgramScalarFieldEnum | WeightProgramScalarFieldEnum[]
  }

  /**
   * WeightProgram findFirstOrThrow
   */
  export type WeightProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightProgram
     */
    select?: WeightProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightProgram
     */
    omit?: WeightProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightProgramInclude<ExtArgs> | null
    /**
     * Filter, which WeightProgram to fetch.
     */
    where?: WeightProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightPrograms to fetch.
     */
    orderBy?: WeightProgramOrderByWithRelationInput | WeightProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeightPrograms.
     */
    cursor?: WeightProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeightPrograms.
     */
    distinct?: WeightProgramScalarFieldEnum | WeightProgramScalarFieldEnum[]
  }

  /**
   * WeightProgram findMany
   */
  export type WeightProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightProgram
     */
    select?: WeightProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightProgram
     */
    omit?: WeightProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightProgramInclude<ExtArgs> | null
    /**
     * Filter, which WeightPrograms to fetch.
     */
    where?: WeightProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightPrograms to fetch.
     */
    orderBy?: WeightProgramOrderByWithRelationInput | WeightProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeightPrograms.
     */
    cursor?: WeightProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightPrograms.
     */
    skip?: number
    distinct?: WeightProgramScalarFieldEnum | WeightProgramScalarFieldEnum[]
  }

  /**
   * WeightProgram create
   */
  export type WeightProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightProgram
     */
    select?: WeightProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightProgram
     */
    omit?: WeightProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightProgramInclude<ExtArgs> | null
    /**
     * The data needed to create a WeightProgram.
     */
    data: XOR<WeightProgramCreateInput, WeightProgramUncheckedCreateInput>
  }

  /**
   * WeightProgram createMany
   */
  export type WeightProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeightPrograms.
     */
    data: WeightProgramCreateManyInput | WeightProgramCreateManyInput[]
  }

  /**
   * WeightProgram createManyAndReturn
   */
  export type WeightProgramCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightProgram
     */
    select?: WeightProgramSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeightProgram
     */
    omit?: WeightProgramOmit<ExtArgs> | null
    /**
     * The data used to create many WeightPrograms.
     */
    data: WeightProgramCreateManyInput | WeightProgramCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightProgramIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeightProgram update
   */
  export type WeightProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightProgram
     */
    select?: WeightProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightProgram
     */
    omit?: WeightProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightProgramInclude<ExtArgs> | null
    /**
     * The data needed to update a WeightProgram.
     */
    data: XOR<WeightProgramUpdateInput, WeightProgramUncheckedUpdateInput>
    /**
     * Choose, which WeightProgram to update.
     */
    where: WeightProgramWhereUniqueInput
  }

  /**
   * WeightProgram updateMany
   */
  export type WeightProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeightPrograms.
     */
    data: XOR<WeightProgramUpdateManyMutationInput, WeightProgramUncheckedUpdateManyInput>
    /**
     * Filter which WeightPrograms to update
     */
    where?: WeightProgramWhereInput
    /**
     * Limit how many WeightPrograms to update.
     */
    limit?: number
  }

  /**
   * WeightProgram updateManyAndReturn
   */
  export type WeightProgramUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightProgram
     */
    select?: WeightProgramSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeightProgram
     */
    omit?: WeightProgramOmit<ExtArgs> | null
    /**
     * The data used to update WeightPrograms.
     */
    data: XOR<WeightProgramUpdateManyMutationInput, WeightProgramUncheckedUpdateManyInput>
    /**
     * Filter which WeightPrograms to update
     */
    where?: WeightProgramWhereInput
    /**
     * Limit how many WeightPrograms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightProgramIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeightProgram upsert
   */
  export type WeightProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightProgram
     */
    select?: WeightProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightProgram
     */
    omit?: WeightProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightProgramInclude<ExtArgs> | null
    /**
     * The filter to search for the WeightProgram to update in case it exists.
     */
    where: WeightProgramWhereUniqueInput
    /**
     * In case the WeightProgram found by the `where` argument doesn't exist, create a new WeightProgram with this data.
     */
    create: XOR<WeightProgramCreateInput, WeightProgramUncheckedCreateInput>
    /**
     * In case the WeightProgram was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeightProgramUpdateInput, WeightProgramUncheckedUpdateInput>
  }

  /**
   * WeightProgram delete
   */
  export type WeightProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightProgram
     */
    select?: WeightProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightProgram
     */
    omit?: WeightProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightProgramInclude<ExtArgs> | null
    /**
     * Filter which WeightProgram to delete.
     */
    where: WeightProgramWhereUniqueInput
  }

  /**
   * WeightProgram deleteMany
   */
  export type WeightProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeightPrograms to delete
     */
    where?: WeightProgramWhereInput
    /**
     * Limit how many WeightPrograms to delete.
     */
    limit?: number
  }

  /**
   * WeightProgram.weightRecords
   */
  export type WeightProgram$weightRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightRecord
     */
    select?: WeightRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightRecord
     */
    omit?: WeightRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightRecordInclude<ExtArgs> | null
    where?: WeightRecordWhereInput
    orderBy?: WeightRecordOrderByWithRelationInput | WeightRecordOrderByWithRelationInput[]
    cursor?: WeightRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeightRecordScalarFieldEnum | WeightRecordScalarFieldEnum[]
  }

  /**
   * WeightProgram without action
   */
  export type WeightProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightProgram
     */
    select?: WeightProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightProgram
     */
    omit?: WeightProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightProgramInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt',
    firstName: 'firstName',
    lastName: 'lastName',
    birthDate: 'birthDate',
    gender: 'gender',
    weight: 'weight',
    height: 'height',
    password: 'password',
    measurementUnit: 'measurementUnit',
    exerciseWeightUnit: 'exerciseWeightUnit'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    iconPath: 'iconPath',
    muscleGroup: 'muscleGroup',
    description: 'description'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const UserExerciseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    currSets: 'currSets',
    currReps: 'currReps',
    currWeight: 'currWeight',
    exerciseId: 'exerciseId',
    createdAt: 'createdAt'
  };

  export type UserExerciseScalarFieldEnum = (typeof UserExerciseScalarFieldEnum)[keyof typeof UserExerciseScalarFieldEnum]


  export const ProtocolScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    startedAt: 'startedAt',
    active: 'active',
    userId: 'userId'
  };

  export type ProtocolScalarFieldEnum = (typeof ProtocolScalarFieldEnum)[keyof typeof ProtocolScalarFieldEnum]


  export const ProtocolDayScalarFieldEnum: {
    id: 'id',
    name: 'name',
    order: 'order',
    recurrent: 'recurrent',
    protocolId: 'protocolId'
  };

  export type ProtocolDayScalarFieldEnum = (typeof ProtocolDayScalarFieldEnum)[keyof typeof ProtocolDayScalarFieldEnum]


  export const WorkoutScalarFieldEnum: {
    id: 'id',
    startTime: 'startTime',
    endTime: 'endTime',
    protocolDayId: 'protocolDayId'
  };

  export type WorkoutScalarFieldEnum = (typeof WorkoutScalarFieldEnum)[keyof typeof WorkoutScalarFieldEnum]


  export const ExerciseRecordScalarFieldEnum: {
    id: 'id',
    reps: 'reps',
    set: 'set',
    weight: 'weight',
    workoutId: 'workoutId',
    userExerciseId: 'userExerciseId'
  };

  export type ExerciseRecordScalarFieldEnum = (typeof ExerciseRecordScalarFieldEnum)[keyof typeof ExerciseRecordScalarFieldEnum]


  export const ProtocolDayUserExerciseScalarFieldEnum: {
    id: 'id',
    userExerciseId: 'userExerciseId',
    protocolDayId: 'protocolDayId'
  };

  export type ProtocolDayUserExerciseScalarFieldEnum = (typeof ProtocolDayUserExerciseScalarFieldEnum)[keyof typeof ProtocolDayUserExerciseScalarFieldEnum]


  export const WeightRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    value: 'value',
    smooth: 'smooth',
    weightProgramId: 'weightProgramId'
  };

  export type WeightRecordScalarFieldEnum = (typeof WeightRecordScalarFieldEnum)[keyof typeof WeightRecordScalarFieldEnum]


  export const WeightProgramScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    active: 'active',
    goalWeight: 'goalWeight',
    mode: 'mode',
    userId: 'userId'
  };

  export type WeightProgramScalarFieldEnum = (typeof WeightProgramScalarFieldEnum)[keyof typeof WeightProgramScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    birthDate?: DateTimeFilter<"User"> | Date | string
    gender?: StringFilter<"User"> | string
    weight?: FloatFilter<"User"> | number
    height?: FloatFilter<"User"> | number
    password?: StringFilter<"User"> | string
    measurementUnit?: StringFilter<"User"> | string
    exerciseWeightUnit?: StringFilter<"User"> | string
    userExcercises?: UserExerciseListRelationFilter
    protocols?: ProtocolListRelationFilter
    weightPrograms?: WeightProgramListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    password?: SortOrder
    measurementUnit?: SortOrder
    exerciseWeightUnit?: SortOrder
    userExcercises?: UserExerciseOrderByRelationAggregateInput
    protocols?: ProtocolOrderByRelationAggregateInput
    weightPrograms?: WeightProgramOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    birthDate?: DateTimeFilter<"User"> | Date | string
    gender?: StringFilter<"User"> | string
    weight?: FloatFilter<"User"> | number
    height?: FloatFilter<"User"> | number
    password?: StringFilter<"User"> | string
    measurementUnit?: StringFilter<"User"> | string
    exerciseWeightUnit?: StringFilter<"User"> | string
    userExcercises?: UserExerciseListRelationFilter
    protocols?: ProtocolListRelationFilter
    weightPrograms?: WeightProgramListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    password?: SortOrder
    measurementUnit?: SortOrder
    exerciseWeightUnit?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    gender?: StringWithAggregatesFilter<"User"> | string
    weight?: FloatWithAggregatesFilter<"User"> | number
    height?: FloatWithAggregatesFilter<"User"> | number
    password?: StringWithAggregatesFilter<"User"> | string
    measurementUnit?: StringWithAggregatesFilter<"User"> | string
    exerciseWeightUnit?: StringWithAggregatesFilter<"User"> | string
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: IntFilter<"Exercise"> | number
    name?: StringFilter<"Exercise"> | string
    iconPath?: StringFilter<"Exercise"> | string
    muscleGroup?: StringFilter<"Exercise"> | string
    description?: StringFilter<"Exercise"> | string
    userExcercises?: UserExerciseListRelationFilter
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    iconPath?: SortOrder
    muscleGroup?: SortOrder
    description?: SortOrder
    userExcercises?: UserExerciseOrderByRelationAggregateInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    name?: StringFilter<"Exercise"> | string
    iconPath?: StringFilter<"Exercise"> | string
    muscleGroup?: StringFilter<"Exercise"> | string
    description?: StringFilter<"Exercise"> | string
    userExcercises?: UserExerciseListRelationFilter
  }, "id">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    iconPath?: SortOrder
    muscleGroup?: SortOrder
    description?: SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _avg?: ExerciseAvgOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
    _sum?: ExerciseSumOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Exercise"> | number
    name?: StringWithAggregatesFilter<"Exercise"> | string
    iconPath?: StringWithAggregatesFilter<"Exercise"> | string
    muscleGroup?: StringWithAggregatesFilter<"Exercise"> | string
    description?: StringWithAggregatesFilter<"Exercise"> | string
  }

  export type UserExerciseWhereInput = {
    AND?: UserExerciseWhereInput | UserExerciseWhereInput[]
    OR?: UserExerciseWhereInput[]
    NOT?: UserExerciseWhereInput | UserExerciseWhereInput[]
    id?: IntFilter<"UserExercise"> | number
    userId?: IntFilter<"UserExercise"> | number
    currSets?: IntFilter<"UserExercise"> | number
    currReps?: IntFilter<"UserExercise"> | number
    currWeight?: FloatFilter<"UserExercise"> | number
    exerciseId?: IntFilter<"UserExercise"> | number
    createdAt?: DateTimeFilter<"UserExercise"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
    exerciseRecords?: ExerciseRecordListRelationFilter
    protocolDayUserExercises?: ProtocolDayUserExerciseListRelationFilter
  }

  export type UserExerciseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    currSets?: SortOrder
    currReps?: SortOrder
    currWeight?: SortOrder
    exerciseId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    exercise?: ExerciseOrderByWithRelationInput
    exerciseRecords?: ExerciseRecordOrderByRelationAggregateInput
    protocolDayUserExercises?: ProtocolDayUserExerciseOrderByRelationAggregateInput
  }

  export type UserExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserExerciseWhereInput | UserExerciseWhereInput[]
    OR?: UserExerciseWhereInput[]
    NOT?: UserExerciseWhereInput | UserExerciseWhereInput[]
    userId?: IntFilter<"UserExercise"> | number
    currSets?: IntFilter<"UserExercise"> | number
    currReps?: IntFilter<"UserExercise"> | number
    currWeight?: FloatFilter<"UserExercise"> | number
    exerciseId?: IntFilter<"UserExercise"> | number
    createdAt?: DateTimeFilter<"UserExercise"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
    exerciseRecords?: ExerciseRecordListRelationFilter
    protocolDayUserExercises?: ProtocolDayUserExerciseListRelationFilter
  }, "id">

  export type UserExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    currSets?: SortOrder
    currReps?: SortOrder
    currWeight?: SortOrder
    exerciseId?: SortOrder
    createdAt?: SortOrder
    _count?: UserExerciseCountOrderByAggregateInput
    _avg?: UserExerciseAvgOrderByAggregateInput
    _max?: UserExerciseMaxOrderByAggregateInput
    _min?: UserExerciseMinOrderByAggregateInput
    _sum?: UserExerciseSumOrderByAggregateInput
  }

  export type UserExerciseScalarWhereWithAggregatesInput = {
    AND?: UserExerciseScalarWhereWithAggregatesInput | UserExerciseScalarWhereWithAggregatesInput[]
    OR?: UserExerciseScalarWhereWithAggregatesInput[]
    NOT?: UserExerciseScalarWhereWithAggregatesInput | UserExerciseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserExercise"> | number
    userId?: IntWithAggregatesFilter<"UserExercise"> | number
    currSets?: IntWithAggregatesFilter<"UserExercise"> | number
    currReps?: IntWithAggregatesFilter<"UserExercise"> | number
    currWeight?: FloatWithAggregatesFilter<"UserExercise"> | number
    exerciseId?: IntWithAggregatesFilter<"UserExercise"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserExercise"> | Date | string
  }

  export type ProtocolWhereInput = {
    AND?: ProtocolWhereInput | ProtocolWhereInput[]
    OR?: ProtocolWhereInput[]
    NOT?: ProtocolWhereInput | ProtocolWhereInput[]
    id?: IntFilter<"Protocol"> | number
    name?: StringFilter<"Protocol"> | string
    createdAt?: DateTimeFilter<"Protocol"> | Date | string
    startedAt?: DateTimeFilter<"Protocol"> | Date | string
    active?: BoolFilter<"Protocol"> | boolean
    userId?: IntFilter<"Protocol"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    protocolDays?: ProtocolDayListRelationFilter
  }

  export type ProtocolOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    active?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    protocolDays?: ProtocolDayOrderByRelationAggregateInput
  }

  export type ProtocolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProtocolWhereInput | ProtocolWhereInput[]
    OR?: ProtocolWhereInput[]
    NOT?: ProtocolWhereInput | ProtocolWhereInput[]
    name?: StringFilter<"Protocol"> | string
    createdAt?: DateTimeFilter<"Protocol"> | Date | string
    startedAt?: DateTimeFilter<"Protocol"> | Date | string
    active?: BoolFilter<"Protocol"> | boolean
    userId?: IntFilter<"Protocol"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    protocolDays?: ProtocolDayListRelationFilter
  }, "id">

  export type ProtocolOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    active?: SortOrder
    userId?: SortOrder
    _count?: ProtocolCountOrderByAggregateInput
    _avg?: ProtocolAvgOrderByAggregateInput
    _max?: ProtocolMaxOrderByAggregateInput
    _min?: ProtocolMinOrderByAggregateInput
    _sum?: ProtocolSumOrderByAggregateInput
  }

  export type ProtocolScalarWhereWithAggregatesInput = {
    AND?: ProtocolScalarWhereWithAggregatesInput | ProtocolScalarWhereWithAggregatesInput[]
    OR?: ProtocolScalarWhereWithAggregatesInput[]
    NOT?: ProtocolScalarWhereWithAggregatesInput | ProtocolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Protocol"> | number
    name?: StringWithAggregatesFilter<"Protocol"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Protocol"> | Date | string
    startedAt?: DateTimeWithAggregatesFilter<"Protocol"> | Date | string
    active?: BoolWithAggregatesFilter<"Protocol"> | boolean
    userId?: IntWithAggregatesFilter<"Protocol"> | number
  }

  export type ProtocolDayWhereInput = {
    AND?: ProtocolDayWhereInput | ProtocolDayWhereInput[]
    OR?: ProtocolDayWhereInput[]
    NOT?: ProtocolDayWhereInput | ProtocolDayWhereInput[]
    id?: IntFilter<"ProtocolDay"> | number
    name?: StringFilter<"ProtocolDay"> | string
    order?: IntFilter<"ProtocolDay"> | number
    recurrent?: BoolFilter<"ProtocolDay"> | boolean
    protocolId?: IntFilter<"ProtocolDay"> | number
    protocol?: XOR<ProtocolScalarRelationFilter, ProtocolWhereInput>
    workouts?: WorkoutListRelationFilter
    protocolDayUserExercises?: ProtocolDayUserExerciseListRelationFilter
  }

  export type ProtocolDayOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    recurrent?: SortOrder
    protocolId?: SortOrder
    protocol?: ProtocolOrderByWithRelationInput
    workouts?: WorkoutOrderByRelationAggregateInput
    protocolDayUserExercises?: ProtocolDayUserExerciseOrderByRelationAggregateInput
  }

  export type ProtocolDayWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProtocolDayWhereInput | ProtocolDayWhereInput[]
    OR?: ProtocolDayWhereInput[]
    NOT?: ProtocolDayWhereInput | ProtocolDayWhereInput[]
    name?: StringFilter<"ProtocolDay"> | string
    order?: IntFilter<"ProtocolDay"> | number
    recurrent?: BoolFilter<"ProtocolDay"> | boolean
    protocolId?: IntFilter<"ProtocolDay"> | number
    protocol?: XOR<ProtocolScalarRelationFilter, ProtocolWhereInput>
    workouts?: WorkoutListRelationFilter
    protocolDayUserExercises?: ProtocolDayUserExerciseListRelationFilter
  }, "id">

  export type ProtocolDayOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    recurrent?: SortOrder
    protocolId?: SortOrder
    _count?: ProtocolDayCountOrderByAggregateInput
    _avg?: ProtocolDayAvgOrderByAggregateInput
    _max?: ProtocolDayMaxOrderByAggregateInput
    _min?: ProtocolDayMinOrderByAggregateInput
    _sum?: ProtocolDaySumOrderByAggregateInput
  }

  export type ProtocolDayScalarWhereWithAggregatesInput = {
    AND?: ProtocolDayScalarWhereWithAggregatesInput | ProtocolDayScalarWhereWithAggregatesInput[]
    OR?: ProtocolDayScalarWhereWithAggregatesInput[]
    NOT?: ProtocolDayScalarWhereWithAggregatesInput | ProtocolDayScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProtocolDay"> | number
    name?: StringWithAggregatesFilter<"ProtocolDay"> | string
    order?: IntWithAggregatesFilter<"ProtocolDay"> | number
    recurrent?: BoolWithAggregatesFilter<"ProtocolDay"> | boolean
    protocolId?: IntWithAggregatesFilter<"ProtocolDay"> | number
  }

  export type WorkoutWhereInput = {
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    id?: IntFilter<"Workout"> | number
    startTime?: DateTimeFilter<"Workout"> | Date | string
    endTime?: DateTimeFilter<"Workout"> | Date | string
    protocolDayId?: IntFilter<"Workout"> | number
    protocolDay?: XOR<ProtocolDayScalarRelationFilter, ProtocolDayWhereInput>
    exerciseRecords?: ExerciseRecordListRelationFilter
  }

  export type WorkoutOrderByWithRelationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    protocolDayId?: SortOrder
    protocolDay?: ProtocolDayOrderByWithRelationInput
    exerciseRecords?: ExerciseRecordOrderByRelationAggregateInput
  }

  export type WorkoutWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    startTime?: DateTimeFilter<"Workout"> | Date | string
    endTime?: DateTimeFilter<"Workout"> | Date | string
    protocolDayId?: IntFilter<"Workout"> | number
    protocolDay?: XOR<ProtocolDayScalarRelationFilter, ProtocolDayWhereInput>
    exerciseRecords?: ExerciseRecordListRelationFilter
  }, "id">

  export type WorkoutOrderByWithAggregationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    protocolDayId?: SortOrder
    _count?: WorkoutCountOrderByAggregateInput
    _avg?: WorkoutAvgOrderByAggregateInput
    _max?: WorkoutMaxOrderByAggregateInput
    _min?: WorkoutMinOrderByAggregateInput
    _sum?: WorkoutSumOrderByAggregateInput
  }

  export type WorkoutScalarWhereWithAggregatesInput = {
    AND?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    OR?: WorkoutScalarWhereWithAggregatesInput[]
    NOT?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Workout"> | number
    startTime?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
    protocolDayId?: IntWithAggregatesFilter<"Workout"> | number
  }

  export type ExerciseRecordWhereInput = {
    AND?: ExerciseRecordWhereInput | ExerciseRecordWhereInput[]
    OR?: ExerciseRecordWhereInput[]
    NOT?: ExerciseRecordWhereInput | ExerciseRecordWhereInput[]
    id?: IntFilter<"ExerciseRecord"> | number
    reps?: IntFilter<"ExerciseRecord"> | number
    set?: IntFilter<"ExerciseRecord"> | number
    weight?: FloatFilter<"ExerciseRecord"> | number
    workoutId?: IntFilter<"ExerciseRecord"> | number
    userExerciseId?: IntFilter<"ExerciseRecord"> | number
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
    userExercise?: XOR<UserExerciseScalarRelationFilter, UserExerciseWhereInput>
  }

  export type ExerciseRecordOrderByWithRelationInput = {
    id?: SortOrder
    reps?: SortOrder
    set?: SortOrder
    weight?: SortOrder
    workoutId?: SortOrder
    userExerciseId?: SortOrder
    workout?: WorkoutOrderByWithRelationInput
    userExercise?: UserExerciseOrderByWithRelationInput
  }

  export type ExerciseRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExerciseRecordWhereInput | ExerciseRecordWhereInput[]
    OR?: ExerciseRecordWhereInput[]
    NOT?: ExerciseRecordWhereInput | ExerciseRecordWhereInput[]
    reps?: IntFilter<"ExerciseRecord"> | number
    set?: IntFilter<"ExerciseRecord"> | number
    weight?: FloatFilter<"ExerciseRecord"> | number
    workoutId?: IntFilter<"ExerciseRecord"> | number
    userExerciseId?: IntFilter<"ExerciseRecord"> | number
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
    userExercise?: XOR<UserExerciseScalarRelationFilter, UserExerciseWhereInput>
  }, "id">

  export type ExerciseRecordOrderByWithAggregationInput = {
    id?: SortOrder
    reps?: SortOrder
    set?: SortOrder
    weight?: SortOrder
    workoutId?: SortOrder
    userExerciseId?: SortOrder
    _count?: ExerciseRecordCountOrderByAggregateInput
    _avg?: ExerciseRecordAvgOrderByAggregateInput
    _max?: ExerciseRecordMaxOrderByAggregateInput
    _min?: ExerciseRecordMinOrderByAggregateInput
    _sum?: ExerciseRecordSumOrderByAggregateInput
  }

  export type ExerciseRecordScalarWhereWithAggregatesInput = {
    AND?: ExerciseRecordScalarWhereWithAggregatesInput | ExerciseRecordScalarWhereWithAggregatesInput[]
    OR?: ExerciseRecordScalarWhereWithAggregatesInput[]
    NOT?: ExerciseRecordScalarWhereWithAggregatesInput | ExerciseRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExerciseRecord"> | number
    reps?: IntWithAggregatesFilter<"ExerciseRecord"> | number
    set?: IntWithAggregatesFilter<"ExerciseRecord"> | number
    weight?: FloatWithAggregatesFilter<"ExerciseRecord"> | number
    workoutId?: IntWithAggregatesFilter<"ExerciseRecord"> | number
    userExerciseId?: IntWithAggregatesFilter<"ExerciseRecord"> | number
  }

  export type ProtocolDayUserExerciseWhereInput = {
    AND?: ProtocolDayUserExerciseWhereInput | ProtocolDayUserExerciseWhereInput[]
    OR?: ProtocolDayUserExerciseWhereInput[]
    NOT?: ProtocolDayUserExerciseWhereInput | ProtocolDayUserExerciseWhereInput[]
    id?: IntFilter<"ProtocolDayUserExercise"> | number
    userExerciseId?: IntFilter<"ProtocolDayUserExercise"> | number
    protocolDayId?: IntFilter<"ProtocolDayUserExercise"> | number
    userExercise?: XOR<UserExerciseScalarRelationFilter, UserExerciseWhereInput>
    protocolDay?: XOR<ProtocolDayScalarRelationFilter, ProtocolDayWhereInput>
  }

  export type ProtocolDayUserExerciseOrderByWithRelationInput = {
    id?: SortOrder
    userExerciseId?: SortOrder
    protocolDayId?: SortOrder
    userExercise?: UserExerciseOrderByWithRelationInput
    protocolDay?: ProtocolDayOrderByWithRelationInput
  }

  export type ProtocolDayUserExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProtocolDayUserExerciseWhereInput | ProtocolDayUserExerciseWhereInput[]
    OR?: ProtocolDayUserExerciseWhereInput[]
    NOT?: ProtocolDayUserExerciseWhereInput | ProtocolDayUserExerciseWhereInput[]
    userExerciseId?: IntFilter<"ProtocolDayUserExercise"> | number
    protocolDayId?: IntFilter<"ProtocolDayUserExercise"> | number
    userExercise?: XOR<UserExerciseScalarRelationFilter, UserExerciseWhereInput>
    protocolDay?: XOR<ProtocolDayScalarRelationFilter, ProtocolDayWhereInput>
  }, "id">

  export type ProtocolDayUserExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    userExerciseId?: SortOrder
    protocolDayId?: SortOrder
    _count?: ProtocolDayUserExerciseCountOrderByAggregateInput
    _avg?: ProtocolDayUserExerciseAvgOrderByAggregateInput
    _max?: ProtocolDayUserExerciseMaxOrderByAggregateInput
    _min?: ProtocolDayUserExerciseMinOrderByAggregateInput
    _sum?: ProtocolDayUserExerciseSumOrderByAggregateInput
  }

  export type ProtocolDayUserExerciseScalarWhereWithAggregatesInput = {
    AND?: ProtocolDayUserExerciseScalarWhereWithAggregatesInput | ProtocolDayUserExerciseScalarWhereWithAggregatesInput[]
    OR?: ProtocolDayUserExerciseScalarWhereWithAggregatesInput[]
    NOT?: ProtocolDayUserExerciseScalarWhereWithAggregatesInput | ProtocolDayUserExerciseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProtocolDayUserExercise"> | number
    userExerciseId?: IntWithAggregatesFilter<"ProtocolDayUserExercise"> | number
    protocolDayId?: IntWithAggregatesFilter<"ProtocolDayUserExercise"> | number
  }

  export type WeightRecordWhereInput = {
    AND?: WeightRecordWhereInput | WeightRecordWhereInput[]
    OR?: WeightRecordWhereInput[]
    NOT?: WeightRecordWhereInput | WeightRecordWhereInput[]
    id?: IntFilter<"WeightRecord"> | number
    createdAt?: DateTimeFilter<"WeightRecord"> | Date | string
    value?: FloatFilter<"WeightRecord"> | number
    smooth?: FloatFilter<"WeightRecord"> | number
    weightProgramId?: IntFilter<"WeightRecord"> | number
    weightProgram?: XOR<WeightProgramScalarRelationFilter, WeightProgramWhereInput>
  }

  export type WeightRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    value?: SortOrder
    smooth?: SortOrder
    weightProgramId?: SortOrder
    weightProgram?: WeightProgramOrderByWithRelationInput
  }

  export type WeightRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WeightRecordWhereInput | WeightRecordWhereInput[]
    OR?: WeightRecordWhereInput[]
    NOT?: WeightRecordWhereInput | WeightRecordWhereInput[]
    createdAt?: DateTimeFilter<"WeightRecord"> | Date | string
    value?: FloatFilter<"WeightRecord"> | number
    smooth?: FloatFilter<"WeightRecord"> | number
    weightProgramId?: IntFilter<"WeightRecord"> | number
    weightProgram?: XOR<WeightProgramScalarRelationFilter, WeightProgramWhereInput>
  }, "id">

  export type WeightRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    value?: SortOrder
    smooth?: SortOrder
    weightProgramId?: SortOrder
    _count?: WeightRecordCountOrderByAggregateInput
    _avg?: WeightRecordAvgOrderByAggregateInput
    _max?: WeightRecordMaxOrderByAggregateInput
    _min?: WeightRecordMinOrderByAggregateInput
    _sum?: WeightRecordSumOrderByAggregateInput
  }

  export type WeightRecordScalarWhereWithAggregatesInput = {
    AND?: WeightRecordScalarWhereWithAggregatesInput | WeightRecordScalarWhereWithAggregatesInput[]
    OR?: WeightRecordScalarWhereWithAggregatesInput[]
    NOT?: WeightRecordScalarWhereWithAggregatesInput | WeightRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WeightRecord"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WeightRecord"> | Date | string
    value?: FloatWithAggregatesFilter<"WeightRecord"> | number
    smooth?: FloatWithAggregatesFilter<"WeightRecord"> | number
    weightProgramId?: IntWithAggregatesFilter<"WeightRecord"> | number
  }

  export type WeightProgramWhereInput = {
    AND?: WeightProgramWhereInput | WeightProgramWhereInput[]
    OR?: WeightProgramWhereInput[]
    NOT?: WeightProgramWhereInput | WeightProgramWhereInput[]
    id?: IntFilter<"WeightProgram"> | number
    createdAt?: DateTimeFilter<"WeightProgram"> | Date | string
    active?: BoolFilter<"WeightProgram"> | boolean
    goalWeight?: FloatFilter<"WeightProgram"> | number
    mode?: StringFilter<"WeightProgram"> | string
    userId?: IntFilter<"WeightProgram"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    weightRecords?: WeightRecordListRelationFilter
  }

  export type WeightProgramOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    goalWeight?: SortOrder
    mode?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    weightRecords?: WeightRecordOrderByRelationAggregateInput
  }

  export type WeightProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WeightProgramWhereInput | WeightProgramWhereInput[]
    OR?: WeightProgramWhereInput[]
    NOT?: WeightProgramWhereInput | WeightProgramWhereInput[]
    createdAt?: DateTimeFilter<"WeightProgram"> | Date | string
    active?: BoolFilter<"WeightProgram"> | boolean
    goalWeight?: FloatFilter<"WeightProgram"> | number
    mode?: StringFilter<"WeightProgram"> | string
    userId?: IntFilter<"WeightProgram"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    weightRecords?: WeightRecordListRelationFilter
  }, "id">

  export type WeightProgramOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    goalWeight?: SortOrder
    mode?: SortOrder
    userId?: SortOrder
    _count?: WeightProgramCountOrderByAggregateInput
    _avg?: WeightProgramAvgOrderByAggregateInput
    _max?: WeightProgramMaxOrderByAggregateInput
    _min?: WeightProgramMinOrderByAggregateInput
    _sum?: WeightProgramSumOrderByAggregateInput
  }

  export type WeightProgramScalarWhereWithAggregatesInput = {
    AND?: WeightProgramScalarWhereWithAggregatesInput | WeightProgramScalarWhereWithAggregatesInput[]
    OR?: WeightProgramScalarWhereWithAggregatesInput[]
    NOT?: WeightProgramScalarWhereWithAggregatesInput | WeightProgramScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WeightProgram"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WeightProgram"> | Date | string
    active?: BoolWithAggregatesFilter<"WeightProgram"> | boolean
    goalWeight?: FloatWithAggregatesFilter<"WeightProgram"> | number
    mode?: StringWithAggregatesFilter<"WeightProgram"> | string
    userId?: IntWithAggregatesFilter<"WeightProgram"> | number
  }

  export type UserCreateInput = {
    email: string
    createdAt?: Date | string
    firstName?: string | null
    lastName?: string | null
    birthDate: Date | string
    gender: string
    weight: number
    height: number
    password: string
    measurementUnit: string
    exerciseWeightUnit: string
    userExcercises?: UserExerciseCreateNestedManyWithoutUserInput
    protocols?: ProtocolCreateNestedManyWithoutUserInput
    weightPrograms?: WeightProgramCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    createdAt?: Date | string
    firstName?: string | null
    lastName?: string | null
    birthDate: Date | string
    gender: string
    weight: number
    height: number
    password: string
    measurementUnit: string
    exerciseWeightUnit: string
    userExcercises?: UserExerciseUncheckedCreateNestedManyWithoutUserInput
    protocols?: ProtocolUncheckedCreateNestedManyWithoutUserInput
    weightPrograms?: WeightProgramUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    measurementUnit?: StringFieldUpdateOperationsInput | string
    exerciseWeightUnit?: StringFieldUpdateOperationsInput | string
    userExcercises?: UserExerciseUpdateManyWithoutUserNestedInput
    protocols?: ProtocolUpdateManyWithoutUserNestedInput
    weightPrograms?: WeightProgramUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    measurementUnit?: StringFieldUpdateOperationsInput | string
    exerciseWeightUnit?: StringFieldUpdateOperationsInput | string
    userExcercises?: UserExerciseUncheckedUpdateManyWithoutUserNestedInput
    protocols?: ProtocolUncheckedUpdateManyWithoutUserNestedInput
    weightPrograms?: WeightProgramUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    createdAt?: Date | string
    firstName?: string | null
    lastName?: string | null
    birthDate: Date | string
    gender: string
    weight: number
    height: number
    password: string
    measurementUnit: string
    exerciseWeightUnit: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    measurementUnit?: StringFieldUpdateOperationsInput | string
    exerciseWeightUnit?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    measurementUnit?: StringFieldUpdateOperationsInput | string
    exerciseWeightUnit?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseCreateInput = {
    name: string
    iconPath: string
    muscleGroup: string
    description: string
    userExcercises?: UserExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: number
    name: string
    iconPath: string
    muscleGroup: string
    description: string
    userExcercises?: UserExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    iconPath?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userExcercises?: UserExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    iconPath?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userExcercises?: UserExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseCreateManyInput = {
    id?: number
    name: string
    iconPath: string
    muscleGroup: string
    description: string
  }

  export type ExerciseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    iconPath?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    iconPath?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UserExerciseCreateInput = {
    currSets: number
    currReps: number
    currWeight: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserExcercisesInput
    exercise: ExerciseCreateNestedOneWithoutUserExcercisesInput
    exerciseRecords?: ExerciseRecordCreateNestedManyWithoutUserExerciseInput
    protocolDayUserExercises?: ProtocolDayUserExerciseCreateNestedManyWithoutUserExerciseInput
  }

  export type UserExerciseUncheckedCreateInput = {
    id?: number
    userId: number
    currSets: number
    currReps: number
    currWeight: number
    exerciseId: number
    createdAt?: Date | string
    exerciseRecords?: ExerciseRecordUncheckedCreateNestedManyWithoutUserExerciseInput
    protocolDayUserExercises?: ProtocolDayUserExerciseUncheckedCreateNestedManyWithoutUserExerciseInput
  }

  export type UserExerciseUpdateInput = {
    currSets?: IntFieldUpdateOperationsInput | number
    currReps?: IntFieldUpdateOperationsInput | number
    currWeight?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserExcercisesNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutUserExcercisesNestedInput
    exerciseRecords?: ExerciseRecordUpdateManyWithoutUserExerciseNestedInput
    protocolDayUserExercises?: ProtocolDayUserExerciseUpdateManyWithoutUserExerciseNestedInput
  }

  export type UserExerciseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    currSets?: IntFieldUpdateOperationsInput | number
    currReps?: IntFieldUpdateOperationsInput | number
    currWeight?: FloatFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exerciseRecords?: ExerciseRecordUncheckedUpdateManyWithoutUserExerciseNestedInput
    protocolDayUserExercises?: ProtocolDayUserExerciseUncheckedUpdateManyWithoutUserExerciseNestedInput
  }

  export type UserExerciseCreateManyInput = {
    id?: number
    userId: number
    currSets: number
    currReps: number
    currWeight: number
    exerciseId: number
    createdAt?: Date | string
  }

  export type UserExerciseUpdateManyMutationInput = {
    currSets?: IntFieldUpdateOperationsInput | number
    currReps?: IntFieldUpdateOperationsInput | number
    currWeight?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExerciseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    currSets?: IntFieldUpdateOperationsInput | number
    currReps?: IntFieldUpdateOperationsInput | number
    currWeight?: FloatFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProtocolCreateInput = {
    name: string
    createdAt?: Date | string
    startedAt?: Date | string
    active: boolean
    user: UserCreateNestedOneWithoutProtocolsInput
    protocolDays?: ProtocolDayCreateNestedManyWithoutProtocolInput
  }

  export type ProtocolUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    startedAt?: Date | string
    active: boolean
    userId: number
    protocolDays?: ProtocolDayUncheckedCreateNestedManyWithoutProtocolInput
  }

  export type ProtocolUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutProtocolsNestedInput
    protocolDays?: ProtocolDayUpdateManyWithoutProtocolNestedInput
  }

  export type ProtocolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    protocolDays?: ProtocolDayUncheckedUpdateManyWithoutProtocolNestedInput
  }

  export type ProtocolCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    startedAt?: Date | string
    active: boolean
    userId: number
  }

  export type ProtocolUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProtocolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProtocolDayCreateInput = {
    name: string
    order: number
    recurrent: boolean
    protocol: ProtocolCreateNestedOneWithoutProtocolDaysInput
    workouts?: WorkoutCreateNestedManyWithoutProtocolDayInput
    protocolDayUserExercises?: ProtocolDayUserExerciseCreateNestedManyWithoutProtocolDayInput
  }

  export type ProtocolDayUncheckedCreateInput = {
    id?: number
    name: string
    order: number
    recurrent: boolean
    protocolId: number
    workouts?: WorkoutUncheckedCreateNestedManyWithoutProtocolDayInput
    protocolDayUserExercises?: ProtocolDayUserExerciseUncheckedCreateNestedManyWithoutProtocolDayInput
  }

  export type ProtocolDayUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    recurrent?: BoolFieldUpdateOperationsInput | boolean
    protocol?: ProtocolUpdateOneRequiredWithoutProtocolDaysNestedInput
    workouts?: WorkoutUpdateManyWithoutProtocolDayNestedInput
    protocolDayUserExercises?: ProtocolDayUserExerciseUpdateManyWithoutProtocolDayNestedInput
  }

  export type ProtocolDayUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    recurrent?: BoolFieldUpdateOperationsInput | boolean
    protocolId?: IntFieldUpdateOperationsInput | number
    workouts?: WorkoutUncheckedUpdateManyWithoutProtocolDayNestedInput
    protocolDayUserExercises?: ProtocolDayUserExerciseUncheckedUpdateManyWithoutProtocolDayNestedInput
  }

  export type ProtocolDayCreateManyInput = {
    id?: number
    name: string
    order: number
    recurrent: boolean
    protocolId: number
  }

  export type ProtocolDayUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    recurrent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProtocolDayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    recurrent?: BoolFieldUpdateOperationsInput | boolean
    protocolId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutCreateInput = {
    startTime?: Date | string
    endTime: Date | string
    protocolDay: ProtocolDayCreateNestedOneWithoutWorkoutsInput
    exerciseRecords?: ExerciseRecordCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateInput = {
    id?: number
    startTime?: Date | string
    endTime: Date | string
    protocolDayId: number
    exerciseRecords?: ExerciseRecordUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUpdateInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    protocolDay?: ProtocolDayUpdateOneRequiredWithoutWorkoutsNestedInput
    exerciseRecords?: ExerciseRecordUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    protocolDayId?: IntFieldUpdateOperationsInput | number
    exerciseRecords?: ExerciseRecordUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutCreateManyInput = {
    id?: number
    startTime?: Date | string
    endTime: Date | string
    protocolDayId: number
  }

  export type WorkoutUpdateManyMutationInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    protocolDayId?: IntFieldUpdateOperationsInput | number
  }

  export type ExerciseRecordCreateInput = {
    reps: number
    set: number
    weight: number
    workout: WorkoutCreateNestedOneWithoutExerciseRecordsInput
    userExercise: UserExerciseCreateNestedOneWithoutExerciseRecordsInput
  }

  export type ExerciseRecordUncheckedCreateInput = {
    id?: number
    reps: number
    set: number
    weight: number
    workoutId: number
    userExerciseId: number
  }

  export type ExerciseRecordUpdateInput = {
    reps?: IntFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    workout?: WorkoutUpdateOneRequiredWithoutExerciseRecordsNestedInput
    userExercise?: UserExerciseUpdateOneRequiredWithoutExerciseRecordsNestedInput
  }

  export type ExerciseRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    userExerciseId?: IntFieldUpdateOperationsInput | number
  }

  export type ExerciseRecordCreateManyInput = {
    id?: number
    reps: number
    set: number
    weight: number
    workoutId: number
    userExerciseId: number
  }

  export type ExerciseRecordUpdateManyMutationInput = {
    reps?: IntFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type ExerciseRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    userExerciseId?: IntFieldUpdateOperationsInput | number
  }

  export type ProtocolDayUserExerciseCreateInput = {
    userExercise: UserExerciseCreateNestedOneWithoutProtocolDayUserExercisesInput
    protocolDay: ProtocolDayCreateNestedOneWithoutProtocolDayUserExercisesInput
  }

  export type ProtocolDayUserExerciseUncheckedCreateInput = {
    id?: number
    userExerciseId: number
    protocolDayId: number
  }

  export type ProtocolDayUserExerciseUpdateInput = {
    userExercise?: UserExerciseUpdateOneRequiredWithoutProtocolDayUserExercisesNestedInput
    protocolDay?: ProtocolDayUpdateOneRequiredWithoutProtocolDayUserExercisesNestedInput
  }

  export type ProtocolDayUserExerciseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userExerciseId?: IntFieldUpdateOperationsInput | number
    protocolDayId?: IntFieldUpdateOperationsInput | number
  }

  export type ProtocolDayUserExerciseCreateManyInput = {
    id?: number
    userExerciseId: number
    protocolDayId: number
  }

  export type ProtocolDayUserExerciseUpdateManyMutationInput = {

  }

  export type ProtocolDayUserExerciseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userExerciseId?: IntFieldUpdateOperationsInput | number
    protocolDayId?: IntFieldUpdateOperationsInput | number
  }

  export type WeightRecordCreateInput = {
    createdAt?: Date | string
    value: number
    smooth: number
    weightProgram: WeightProgramCreateNestedOneWithoutWeightRecordsInput
  }

  export type WeightRecordUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    value: number
    smooth: number
    weightProgramId: number
  }

  export type WeightRecordUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    smooth?: FloatFieldUpdateOperationsInput | number
    weightProgram?: WeightProgramUpdateOneRequiredWithoutWeightRecordsNestedInput
  }

  export type WeightRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    smooth?: FloatFieldUpdateOperationsInput | number
    weightProgramId?: IntFieldUpdateOperationsInput | number
  }

  export type WeightRecordCreateManyInput = {
    id?: number
    createdAt?: Date | string
    value: number
    smooth: number
    weightProgramId: number
  }

  export type WeightRecordUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    smooth?: FloatFieldUpdateOperationsInput | number
  }

  export type WeightRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    smooth?: FloatFieldUpdateOperationsInput | number
    weightProgramId?: IntFieldUpdateOperationsInput | number
  }

  export type WeightProgramCreateInput = {
    createdAt?: Date | string
    active: boolean
    goalWeight: number
    mode: string
    user: UserCreateNestedOneWithoutWeightProgramsInput
    weightRecords?: WeightRecordCreateNestedManyWithoutWeightProgramInput
  }

  export type WeightProgramUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    active: boolean
    goalWeight: number
    mode: string
    userId: number
    weightRecords?: WeightRecordUncheckedCreateNestedManyWithoutWeightProgramInput
  }

  export type WeightProgramUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    goalWeight?: FloatFieldUpdateOperationsInput | number
    mode?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWeightProgramsNestedInput
    weightRecords?: WeightRecordUpdateManyWithoutWeightProgramNestedInput
  }

  export type WeightProgramUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    goalWeight?: FloatFieldUpdateOperationsInput | number
    mode?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    weightRecords?: WeightRecordUncheckedUpdateManyWithoutWeightProgramNestedInput
  }

  export type WeightProgramCreateManyInput = {
    id?: number
    createdAt?: Date | string
    active: boolean
    goalWeight: number
    mode: string
    userId: number
  }

  export type WeightProgramUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    goalWeight?: FloatFieldUpdateOperationsInput | number
    mode?: StringFieldUpdateOperationsInput | string
  }

  export type WeightProgramUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    goalWeight?: FloatFieldUpdateOperationsInput | number
    mode?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserExerciseListRelationFilter = {
    every?: UserExerciseWhereInput
    some?: UserExerciseWhereInput
    none?: UserExerciseWhereInput
  }

  export type ProtocolListRelationFilter = {
    every?: ProtocolWhereInput
    some?: ProtocolWhereInput
    none?: ProtocolWhereInput
  }

  export type WeightProgramListRelationFilter = {
    every?: WeightProgramWhereInput
    some?: WeightProgramWhereInput
    none?: WeightProgramWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProtocolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeightProgramOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    password?: SortOrder
    measurementUnit?: SortOrder
    exerciseWeightUnit?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    height?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    password?: SortOrder
    measurementUnit?: SortOrder
    exerciseWeightUnit?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    password?: SortOrder
    measurementUnit?: SortOrder
    exerciseWeightUnit?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    height?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iconPath?: SortOrder
    muscleGroup?: SortOrder
    description?: SortOrder
  }

  export type ExerciseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iconPath?: SortOrder
    muscleGroup?: SortOrder
    description?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iconPath?: SortOrder
    muscleGroup?: SortOrder
    description?: SortOrder
  }

  export type ExerciseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ExerciseScalarRelationFilter = {
    is?: ExerciseWhereInput
    isNot?: ExerciseWhereInput
  }

  export type ExerciseRecordListRelationFilter = {
    every?: ExerciseRecordWhereInput
    some?: ExerciseRecordWhereInput
    none?: ExerciseRecordWhereInput
  }

  export type ProtocolDayUserExerciseListRelationFilter = {
    every?: ProtocolDayUserExerciseWhereInput
    some?: ProtocolDayUserExerciseWhereInput
    none?: ProtocolDayUserExerciseWhereInput
  }

  export type ExerciseRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProtocolDayUserExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currSets?: SortOrder
    currReps?: SortOrder
    currWeight?: SortOrder
    exerciseId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserExerciseAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currSets?: SortOrder
    currReps?: SortOrder
    currWeight?: SortOrder
    exerciseId?: SortOrder
  }

  export type UserExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currSets?: SortOrder
    currReps?: SortOrder
    currWeight?: SortOrder
    exerciseId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currSets?: SortOrder
    currReps?: SortOrder
    currWeight?: SortOrder
    exerciseId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserExerciseSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currSets?: SortOrder
    currReps?: SortOrder
    currWeight?: SortOrder
    exerciseId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProtocolDayListRelationFilter = {
    every?: ProtocolDayWhereInput
    some?: ProtocolDayWhereInput
    none?: ProtocolDayWhereInput
  }

  export type ProtocolDayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProtocolCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    active?: SortOrder
    userId?: SortOrder
  }

  export type ProtocolAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProtocolMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    active?: SortOrder
    userId?: SortOrder
  }

  export type ProtocolMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    active?: SortOrder
    userId?: SortOrder
  }

  export type ProtocolSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProtocolScalarRelationFilter = {
    is?: ProtocolWhereInput
    isNot?: ProtocolWhereInput
  }

  export type WorkoutListRelationFilter = {
    every?: WorkoutWhereInput
    some?: WorkoutWhereInput
    none?: WorkoutWhereInput
  }

  export type WorkoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProtocolDayCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    recurrent?: SortOrder
    protocolId?: SortOrder
  }

  export type ProtocolDayAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    protocolId?: SortOrder
  }

  export type ProtocolDayMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    recurrent?: SortOrder
    protocolId?: SortOrder
  }

  export type ProtocolDayMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    recurrent?: SortOrder
    protocolId?: SortOrder
  }

  export type ProtocolDaySumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    protocolId?: SortOrder
  }

  export type ProtocolDayScalarRelationFilter = {
    is?: ProtocolDayWhereInput
    isNot?: ProtocolDayWhereInput
  }

  export type WorkoutCountOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    protocolDayId?: SortOrder
  }

  export type WorkoutAvgOrderByAggregateInput = {
    id?: SortOrder
    protocolDayId?: SortOrder
  }

  export type WorkoutMaxOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    protocolDayId?: SortOrder
  }

  export type WorkoutMinOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    protocolDayId?: SortOrder
  }

  export type WorkoutSumOrderByAggregateInput = {
    id?: SortOrder
    protocolDayId?: SortOrder
  }

  export type WorkoutScalarRelationFilter = {
    is?: WorkoutWhereInput
    isNot?: WorkoutWhereInput
  }

  export type UserExerciseScalarRelationFilter = {
    is?: UserExerciseWhereInput
    isNot?: UserExerciseWhereInput
  }

  export type ExerciseRecordCountOrderByAggregateInput = {
    id?: SortOrder
    reps?: SortOrder
    set?: SortOrder
    weight?: SortOrder
    workoutId?: SortOrder
    userExerciseId?: SortOrder
  }

  export type ExerciseRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    reps?: SortOrder
    set?: SortOrder
    weight?: SortOrder
    workoutId?: SortOrder
    userExerciseId?: SortOrder
  }

  export type ExerciseRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    reps?: SortOrder
    set?: SortOrder
    weight?: SortOrder
    workoutId?: SortOrder
    userExerciseId?: SortOrder
  }

  export type ExerciseRecordMinOrderByAggregateInput = {
    id?: SortOrder
    reps?: SortOrder
    set?: SortOrder
    weight?: SortOrder
    workoutId?: SortOrder
    userExerciseId?: SortOrder
  }

  export type ExerciseRecordSumOrderByAggregateInput = {
    id?: SortOrder
    reps?: SortOrder
    set?: SortOrder
    weight?: SortOrder
    workoutId?: SortOrder
    userExerciseId?: SortOrder
  }

  export type ProtocolDayUserExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    userExerciseId?: SortOrder
    protocolDayId?: SortOrder
  }

  export type ProtocolDayUserExerciseAvgOrderByAggregateInput = {
    id?: SortOrder
    userExerciseId?: SortOrder
    protocolDayId?: SortOrder
  }

  export type ProtocolDayUserExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    userExerciseId?: SortOrder
    protocolDayId?: SortOrder
  }

  export type ProtocolDayUserExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    userExerciseId?: SortOrder
    protocolDayId?: SortOrder
  }

  export type ProtocolDayUserExerciseSumOrderByAggregateInput = {
    id?: SortOrder
    userExerciseId?: SortOrder
    protocolDayId?: SortOrder
  }

  export type WeightProgramScalarRelationFilter = {
    is?: WeightProgramWhereInput
    isNot?: WeightProgramWhereInput
  }

  export type WeightRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    value?: SortOrder
    smooth?: SortOrder
    weightProgramId?: SortOrder
  }

  export type WeightRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    smooth?: SortOrder
    weightProgramId?: SortOrder
  }

  export type WeightRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    value?: SortOrder
    smooth?: SortOrder
    weightProgramId?: SortOrder
  }

  export type WeightRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    value?: SortOrder
    smooth?: SortOrder
    weightProgramId?: SortOrder
  }

  export type WeightRecordSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    smooth?: SortOrder
    weightProgramId?: SortOrder
  }

  export type WeightRecordListRelationFilter = {
    every?: WeightRecordWhereInput
    some?: WeightRecordWhereInput
    none?: WeightRecordWhereInput
  }

  export type WeightRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeightProgramCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    goalWeight?: SortOrder
    mode?: SortOrder
    userId?: SortOrder
  }

  export type WeightProgramAvgOrderByAggregateInput = {
    id?: SortOrder
    goalWeight?: SortOrder
    userId?: SortOrder
  }

  export type WeightProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    goalWeight?: SortOrder
    mode?: SortOrder
    userId?: SortOrder
  }

  export type WeightProgramMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    goalWeight?: SortOrder
    mode?: SortOrder
    userId?: SortOrder
  }

  export type WeightProgramSumOrderByAggregateInput = {
    id?: SortOrder
    goalWeight?: SortOrder
    userId?: SortOrder
  }

  export type UserExerciseCreateNestedManyWithoutUserInput = {
    create?: XOR<UserExerciseCreateWithoutUserInput, UserExerciseUncheckedCreateWithoutUserInput> | UserExerciseCreateWithoutUserInput[] | UserExerciseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserExerciseCreateOrConnectWithoutUserInput | UserExerciseCreateOrConnectWithoutUserInput[]
    createMany?: UserExerciseCreateManyUserInputEnvelope
    connect?: UserExerciseWhereUniqueInput | UserExerciseWhereUniqueInput[]
  }

  export type ProtocolCreateNestedManyWithoutUserInput = {
    create?: XOR<ProtocolCreateWithoutUserInput, ProtocolUncheckedCreateWithoutUserInput> | ProtocolCreateWithoutUserInput[] | ProtocolUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProtocolCreateOrConnectWithoutUserInput | ProtocolCreateOrConnectWithoutUserInput[]
    createMany?: ProtocolCreateManyUserInputEnvelope
    connect?: ProtocolWhereUniqueInput | ProtocolWhereUniqueInput[]
  }

  export type WeightProgramCreateNestedManyWithoutUserInput = {
    create?: XOR<WeightProgramCreateWithoutUserInput, WeightProgramUncheckedCreateWithoutUserInput> | WeightProgramCreateWithoutUserInput[] | WeightProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeightProgramCreateOrConnectWithoutUserInput | WeightProgramCreateOrConnectWithoutUserInput[]
    createMany?: WeightProgramCreateManyUserInputEnvelope
    connect?: WeightProgramWhereUniqueInput | WeightProgramWhereUniqueInput[]
  }

  export type UserExerciseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserExerciseCreateWithoutUserInput, UserExerciseUncheckedCreateWithoutUserInput> | UserExerciseCreateWithoutUserInput[] | UserExerciseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserExerciseCreateOrConnectWithoutUserInput | UserExerciseCreateOrConnectWithoutUserInput[]
    createMany?: UserExerciseCreateManyUserInputEnvelope
    connect?: UserExerciseWhereUniqueInput | UserExerciseWhereUniqueInput[]
  }

  export type ProtocolUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProtocolCreateWithoutUserInput, ProtocolUncheckedCreateWithoutUserInput> | ProtocolCreateWithoutUserInput[] | ProtocolUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProtocolCreateOrConnectWithoutUserInput | ProtocolCreateOrConnectWithoutUserInput[]
    createMany?: ProtocolCreateManyUserInputEnvelope
    connect?: ProtocolWhereUniqueInput | ProtocolWhereUniqueInput[]
  }

  export type WeightProgramUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WeightProgramCreateWithoutUserInput, WeightProgramUncheckedCreateWithoutUserInput> | WeightProgramCreateWithoutUserInput[] | WeightProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeightProgramCreateOrConnectWithoutUserInput | WeightProgramCreateOrConnectWithoutUserInput[]
    createMany?: WeightProgramCreateManyUserInputEnvelope
    connect?: WeightProgramWhereUniqueInput | WeightProgramWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserExerciseUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserExerciseCreateWithoutUserInput, UserExerciseUncheckedCreateWithoutUserInput> | UserExerciseCreateWithoutUserInput[] | UserExerciseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserExerciseCreateOrConnectWithoutUserInput | UserExerciseCreateOrConnectWithoutUserInput[]
    upsert?: UserExerciseUpsertWithWhereUniqueWithoutUserInput | UserExerciseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserExerciseCreateManyUserInputEnvelope
    set?: UserExerciseWhereUniqueInput | UserExerciseWhereUniqueInput[]
    disconnect?: UserExerciseWhereUniqueInput | UserExerciseWhereUniqueInput[]
    delete?: UserExerciseWhereUniqueInput | UserExerciseWhereUniqueInput[]
    connect?: UserExerciseWhereUniqueInput | UserExerciseWhereUniqueInput[]
    update?: UserExerciseUpdateWithWhereUniqueWithoutUserInput | UserExerciseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserExerciseUpdateManyWithWhereWithoutUserInput | UserExerciseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserExerciseScalarWhereInput | UserExerciseScalarWhereInput[]
  }

  export type ProtocolUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProtocolCreateWithoutUserInput, ProtocolUncheckedCreateWithoutUserInput> | ProtocolCreateWithoutUserInput[] | ProtocolUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProtocolCreateOrConnectWithoutUserInput | ProtocolCreateOrConnectWithoutUserInput[]
    upsert?: ProtocolUpsertWithWhereUniqueWithoutUserInput | ProtocolUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProtocolCreateManyUserInputEnvelope
    set?: ProtocolWhereUniqueInput | ProtocolWhereUniqueInput[]
    disconnect?: ProtocolWhereUniqueInput | ProtocolWhereUniqueInput[]
    delete?: ProtocolWhereUniqueInput | ProtocolWhereUniqueInput[]
    connect?: ProtocolWhereUniqueInput | ProtocolWhereUniqueInput[]
    update?: ProtocolUpdateWithWhereUniqueWithoutUserInput | ProtocolUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProtocolUpdateManyWithWhereWithoutUserInput | ProtocolUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProtocolScalarWhereInput | ProtocolScalarWhereInput[]
  }

  export type WeightProgramUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeightProgramCreateWithoutUserInput, WeightProgramUncheckedCreateWithoutUserInput> | WeightProgramCreateWithoutUserInput[] | WeightProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeightProgramCreateOrConnectWithoutUserInput | WeightProgramCreateOrConnectWithoutUserInput[]
    upsert?: WeightProgramUpsertWithWhereUniqueWithoutUserInput | WeightProgramUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeightProgramCreateManyUserInputEnvelope
    set?: WeightProgramWhereUniqueInput | WeightProgramWhereUniqueInput[]
    disconnect?: WeightProgramWhereUniqueInput | WeightProgramWhereUniqueInput[]
    delete?: WeightProgramWhereUniqueInput | WeightProgramWhereUniqueInput[]
    connect?: WeightProgramWhereUniqueInput | WeightProgramWhereUniqueInput[]
    update?: WeightProgramUpdateWithWhereUniqueWithoutUserInput | WeightProgramUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeightProgramUpdateManyWithWhereWithoutUserInput | WeightProgramUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeightProgramScalarWhereInput | WeightProgramScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserExerciseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserExerciseCreateWithoutUserInput, UserExerciseUncheckedCreateWithoutUserInput> | UserExerciseCreateWithoutUserInput[] | UserExerciseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserExerciseCreateOrConnectWithoutUserInput | UserExerciseCreateOrConnectWithoutUserInput[]
    upsert?: UserExerciseUpsertWithWhereUniqueWithoutUserInput | UserExerciseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserExerciseCreateManyUserInputEnvelope
    set?: UserExerciseWhereUniqueInput | UserExerciseWhereUniqueInput[]
    disconnect?: UserExerciseWhereUniqueInput | UserExerciseWhereUniqueInput[]
    delete?: UserExerciseWhereUniqueInput | UserExerciseWhereUniqueInput[]
    connect?: UserExerciseWhereUniqueInput | UserExerciseWhereUniqueInput[]
    update?: UserExerciseUpdateWithWhereUniqueWithoutUserInput | UserExerciseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserExerciseUpdateManyWithWhereWithoutUserInput | UserExerciseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserExerciseScalarWhereInput | UserExerciseScalarWhereInput[]
  }

  export type ProtocolUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProtocolCreateWithoutUserInput, ProtocolUncheckedCreateWithoutUserInput> | ProtocolCreateWithoutUserInput[] | ProtocolUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProtocolCreateOrConnectWithoutUserInput | ProtocolCreateOrConnectWithoutUserInput[]
    upsert?: ProtocolUpsertWithWhereUniqueWithoutUserInput | ProtocolUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProtocolCreateManyUserInputEnvelope
    set?: ProtocolWhereUniqueInput | ProtocolWhereUniqueInput[]
    disconnect?: ProtocolWhereUniqueInput | ProtocolWhereUniqueInput[]
    delete?: ProtocolWhereUniqueInput | ProtocolWhereUniqueInput[]
    connect?: ProtocolWhereUniqueInput | ProtocolWhereUniqueInput[]
    update?: ProtocolUpdateWithWhereUniqueWithoutUserInput | ProtocolUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProtocolUpdateManyWithWhereWithoutUserInput | ProtocolUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProtocolScalarWhereInput | ProtocolScalarWhereInput[]
  }

  export type WeightProgramUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeightProgramCreateWithoutUserInput, WeightProgramUncheckedCreateWithoutUserInput> | WeightProgramCreateWithoutUserInput[] | WeightProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeightProgramCreateOrConnectWithoutUserInput | WeightProgramCreateOrConnectWithoutUserInput[]
    upsert?: WeightProgramUpsertWithWhereUniqueWithoutUserInput | WeightProgramUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeightProgramCreateManyUserInputEnvelope
    set?: WeightProgramWhereUniqueInput | WeightProgramWhereUniqueInput[]
    disconnect?: WeightProgramWhereUniqueInput | WeightProgramWhereUniqueInput[]
    delete?: WeightProgramWhereUniqueInput | WeightProgramWhereUniqueInput[]
    connect?: WeightProgramWhereUniqueInput | WeightProgramWhereUniqueInput[]
    update?: WeightProgramUpdateWithWhereUniqueWithoutUserInput | WeightProgramUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeightProgramUpdateManyWithWhereWithoutUserInput | WeightProgramUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeightProgramScalarWhereInput | WeightProgramScalarWhereInput[]
  }

  export type UserExerciseCreateNestedManyWithoutExerciseInput = {
    create?: XOR<UserExerciseCreateWithoutExerciseInput, UserExerciseUncheckedCreateWithoutExerciseInput> | UserExerciseCreateWithoutExerciseInput[] | UserExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: UserExerciseCreateOrConnectWithoutExerciseInput | UserExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: UserExerciseCreateManyExerciseInputEnvelope
    connect?: UserExerciseWhereUniqueInput | UserExerciseWhereUniqueInput[]
  }

  export type UserExerciseUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<UserExerciseCreateWithoutExerciseInput, UserExerciseUncheckedCreateWithoutExerciseInput> | UserExerciseCreateWithoutExerciseInput[] | UserExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: UserExerciseCreateOrConnectWithoutExerciseInput | UserExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: UserExerciseCreateManyExerciseInputEnvelope
    connect?: UserExerciseWhereUniqueInput | UserExerciseWhereUniqueInput[]
  }

  export type UserExerciseUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<UserExerciseCreateWithoutExerciseInput, UserExerciseUncheckedCreateWithoutExerciseInput> | UserExerciseCreateWithoutExerciseInput[] | UserExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: UserExerciseCreateOrConnectWithoutExerciseInput | UserExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: UserExerciseUpsertWithWhereUniqueWithoutExerciseInput | UserExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: UserExerciseCreateManyExerciseInputEnvelope
    set?: UserExerciseWhereUniqueInput | UserExerciseWhereUniqueInput[]
    disconnect?: UserExerciseWhereUniqueInput | UserExerciseWhereUniqueInput[]
    delete?: UserExerciseWhereUniqueInput | UserExerciseWhereUniqueInput[]
    connect?: UserExerciseWhereUniqueInput | UserExerciseWhereUniqueInput[]
    update?: UserExerciseUpdateWithWhereUniqueWithoutExerciseInput | UserExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: UserExerciseUpdateManyWithWhereWithoutExerciseInput | UserExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: UserExerciseScalarWhereInput | UserExerciseScalarWhereInput[]
  }

  export type UserExerciseUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<UserExerciseCreateWithoutExerciseInput, UserExerciseUncheckedCreateWithoutExerciseInput> | UserExerciseCreateWithoutExerciseInput[] | UserExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: UserExerciseCreateOrConnectWithoutExerciseInput | UserExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: UserExerciseUpsertWithWhereUniqueWithoutExerciseInput | UserExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: UserExerciseCreateManyExerciseInputEnvelope
    set?: UserExerciseWhereUniqueInput | UserExerciseWhereUniqueInput[]
    disconnect?: UserExerciseWhereUniqueInput | UserExerciseWhereUniqueInput[]
    delete?: UserExerciseWhereUniqueInput | UserExerciseWhereUniqueInput[]
    connect?: UserExerciseWhereUniqueInput | UserExerciseWhereUniqueInput[]
    update?: UserExerciseUpdateWithWhereUniqueWithoutExerciseInput | UserExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: UserExerciseUpdateManyWithWhereWithoutExerciseInput | UserExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: UserExerciseScalarWhereInput | UserExerciseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserExcercisesInput = {
    create?: XOR<UserCreateWithoutUserExcercisesInput, UserUncheckedCreateWithoutUserExcercisesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserExcercisesInput
    connect?: UserWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutUserExcercisesInput = {
    create?: XOR<ExerciseCreateWithoutUserExcercisesInput, ExerciseUncheckedCreateWithoutUserExcercisesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutUserExcercisesInput
    connect?: ExerciseWhereUniqueInput
  }

  export type ExerciseRecordCreateNestedManyWithoutUserExerciseInput = {
    create?: XOR<ExerciseRecordCreateWithoutUserExerciseInput, ExerciseRecordUncheckedCreateWithoutUserExerciseInput> | ExerciseRecordCreateWithoutUserExerciseInput[] | ExerciseRecordUncheckedCreateWithoutUserExerciseInput[]
    connectOrCreate?: ExerciseRecordCreateOrConnectWithoutUserExerciseInput | ExerciseRecordCreateOrConnectWithoutUserExerciseInput[]
    createMany?: ExerciseRecordCreateManyUserExerciseInputEnvelope
    connect?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
  }

  export type ProtocolDayUserExerciseCreateNestedManyWithoutUserExerciseInput = {
    create?: XOR<ProtocolDayUserExerciseCreateWithoutUserExerciseInput, ProtocolDayUserExerciseUncheckedCreateWithoutUserExerciseInput> | ProtocolDayUserExerciseCreateWithoutUserExerciseInput[] | ProtocolDayUserExerciseUncheckedCreateWithoutUserExerciseInput[]
    connectOrCreate?: ProtocolDayUserExerciseCreateOrConnectWithoutUserExerciseInput | ProtocolDayUserExerciseCreateOrConnectWithoutUserExerciseInput[]
    createMany?: ProtocolDayUserExerciseCreateManyUserExerciseInputEnvelope
    connect?: ProtocolDayUserExerciseWhereUniqueInput | ProtocolDayUserExerciseWhereUniqueInput[]
  }

  export type ExerciseRecordUncheckedCreateNestedManyWithoutUserExerciseInput = {
    create?: XOR<ExerciseRecordCreateWithoutUserExerciseInput, ExerciseRecordUncheckedCreateWithoutUserExerciseInput> | ExerciseRecordCreateWithoutUserExerciseInput[] | ExerciseRecordUncheckedCreateWithoutUserExerciseInput[]
    connectOrCreate?: ExerciseRecordCreateOrConnectWithoutUserExerciseInput | ExerciseRecordCreateOrConnectWithoutUserExerciseInput[]
    createMany?: ExerciseRecordCreateManyUserExerciseInputEnvelope
    connect?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
  }

  export type ProtocolDayUserExerciseUncheckedCreateNestedManyWithoutUserExerciseInput = {
    create?: XOR<ProtocolDayUserExerciseCreateWithoutUserExerciseInput, ProtocolDayUserExerciseUncheckedCreateWithoutUserExerciseInput> | ProtocolDayUserExerciseCreateWithoutUserExerciseInput[] | ProtocolDayUserExerciseUncheckedCreateWithoutUserExerciseInput[]
    connectOrCreate?: ProtocolDayUserExerciseCreateOrConnectWithoutUserExerciseInput | ProtocolDayUserExerciseCreateOrConnectWithoutUserExerciseInput[]
    createMany?: ProtocolDayUserExerciseCreateManyUserExerciseInputEnvelope
    connect?: ProtocolDayUserExerciseWhereUniqueInput | ProtocolDayUserExerciseWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutUserExcercisesNestedInput = {
    create?: XOR<UserCreateWithoutUserExcercisesInput, UserUncheckedCreateWithoutUserExcercisesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserExcercisesInput
    upsert?: UserUpsertWithoutUserExcercisesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserExcercisesInput, UserUpdateWithoutUserExcercisesInput>, UserUncheckedUpdateWithoutUserExcercisesInput>
  }

  export type ExerciseUpdateOneRequiredWithoutUserExcercisesNestedInput = {
    create?: XOR<ExerciseCreateWithoutUserExcercisesInput, ExerciseUncheckedCreateWithoutUserExcercisesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutUserExcercisesInput
    upsert?: ExerciseUpsertWithoutUserExcercisesInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutUserExcercisesInput, ExerciseUpdateWithoutUserExcercisesInput>, ExerciseUncheckedUpdateWithoutUserExcercisesInput>
  }

  export type ExerciseRecordUpdateManyWithoutUserExerciseNestedInput = {
    create?: XOR<ExerciseRecordCreateWithoutUserExerciseInput, ExerciseRecordUncheckedCreateWithoutUserExerciseInput> | ExerciseRecordCreateWithoutUserExerciseInput[] | ExerciseRecordUncheckedCreateWithoutUserExerciseInput[]
    connectOrCreate?: ExerciseRecordCreateOrConnectWithoutUserExerciseInput | ExerciseRecordCreateOrConnectWithoutUserExerciseInput[]
    upsert?: ExerciseRecordUpsertWithWhereUniqueWithoutUserExerciseInput | ExerciseRecordUpsertWithWhereUniqueWithoutUserExerciseInput[]
    createMany?: ExerciseRecordCreateManyUserExerciseInputEnvelope
    set?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    disconnect?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    delete?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    connect?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    update?: ExerciseRecordUpdateWithWhereUniqueWithoutUserExerciseInput | ExerciseRecordUpdateWithWhereUniqueWithoutUserExerciseInput[]
    updateMany?: ExerciseRecordUpdateManyWithWhereWithoutUserExerciseInput | ExerciseRecordUpdateManyWithWhereWithoutUserExerciseInput[]
    deleteMany?: ExerciseRecordScalarWhereInput | ExerciseRecordScalarWhereInput[]
  }

  export type ProtocolDayUserExerciseUpdateManyWithoutUserExerciseNestedInput = {
    create?: XOR<ProtocolDayUserExerciseCreateWithoutUserExerciseInput, ProtocolDayUserExerciseUncheckedCreateWithoutUserExerciseInput> | ProtocolDayUserExerciseCreateWithoutUserExerciseInput[] | ProtocolDayUserExerciseUncheckedCreateWithoutUserExerciseInput[]
    connectOrCreate?: ProtocolDayUserExerciseCreateOrConnectWithoutUserExerciseInput | ProtocolDayUserExerciseCreateOrConnectWithoutUserExerciseInput[]
    upsert?: ProtocolDayUserExerciseUpsertWithWhereUniqueWithoutUserExerciseInput | ProtocolDayUserExerciseUpsertWithWhereUniqueWithoutUserExerciseInput[]
    createMany?: ProtocolDayUserExerciseCreateManyUserExerciseInputEnvelope
    set?: ProtocolDayUserExerciseWhereUniqueInput | ProtocolDayUserExerciseWhereUniqueInput[]
    disconnect?: ProtocolDayUserExerciseWhereUniqueInput | ProtocolDayUserExerciseWhereUniqueInput[]
    delete?: ProtocolDayUserExerciseWhereUniqueInput | ProtocolDayUserExerciseWhereUniqueInput[]
    connect?: ProtocolDayUserExerciseWhereUniqueInput | ProtocolDayUserExerciseWhereUniqueInput[]
    update?: ProtocolDayUserExerciseUpdateWithWhereUniqueWithoutUserExerciseInput | ProtocolDayUserExerciseUpdateWithWhereUniqueWithoutUserExerciseInput[]
    updateMany?: ProtocolDayUserExerciseUpdateManyWithWhereWithoutUserExerciseInput | ProtocolDayUserExerciseUpdateManyWithWhereWithoutUserExerciseInput[]
    deleteMany?: ProtocolDayUserExerciseScalarWhereInput | ProtocolDayUserExerciseScalarWhereInput[]
  }

  export type ExerciseRecordUncheckedUpdateManyWithoutUserExerciseNestedInput = {
    create?: XOR<ExerciseRecordCreateWithoutUserExerciseInput, ExerciseRecordUncheckedCreateWithoutUserExerciseInput> | ExerciseRecordCreateWithoutUserExerciseInput[] | ExerciseRecordUncheckedCreateWithoutUserExerciseInput[]
    connectOrCreate?: ExerciseRecordCreateOrConnectWithoutUserExerciseInput | ExerciseRecordCreateOrConnectWithoutUserExerciseInput[]
    upsert?: ExerciseRecordUpsertWithWhereUniqueWithoutUserExerciseInput | ExerciseRecordUpsertWithWhereUniqueWithoutUserExerciseInput[]
    createMany?: ExerciseRecordCreateManyUserExerciseInputEnvelope
    set?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    disconnect?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    delete?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    connect?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    update?: ExerciseRecordUpdateWithWhereUniqueWithoutUserExerciseInput | ExerciseRecordUpdateWithWhereUniqueWithoutUserExerciseInput[]
    updateMany?: ExerciseRecordUpdateManyWithWhereWithoutUserExerciseInput | ExerciseRecordUpdateManyWithWhereWithoutUserExerciseInput[]
    deleteMany?: ExerciseRecordScalarWhereInput | ExerciseRecordScalarWhereInput[]
  }

  export type ProtocolDayUserExerciseUncheckedUpdateManyWithoutUserExerciseNestedInput = {
    create?: XOR<ProtocolDayUserExerciseCreateWithoutUserExerciseInput, ProtocolDayUserExerciseUncheckedCreateWithoutUserExerciseInput> | ProtocolDayUserExerciseCreateWithoutUserExerciseInput[] | ProtocolDayUserExerciseUncheckedCreateWithoutUserExerciseInput[]
    connectOrCreate?: ProtocolDayUserExerciseCreateOrConnectWithoutUserExerciseInput | ProtocolDayUserExerciseCreateOrConnectWithoutUserExerciseInput[]
    upsert?: ProtocolDayUserExerciseUpsertWithWhereUniqueWithoutUserExerciseInput | ProtocolDayUserExerciseUpsertWithWhereUniqueWithoutUserExerciseInput[]
    createMany?: ProtocolDayUserExerciseCreateManyUserExerciseInputEnvelope
    set?: ProtocolDayUserExerciseWhereUniqueInput | ProtocolDayUserExerciseWhereUniqueInput[]
    disconnect?: ProtocolDayUserExerciseWhereUniqueInput | ProtocolDayUserExerciseWhereUniqueInput[]
    delete?: ProtocolDayUserExerciseWhereUniqueInput | ProtocolDayUserExerciseWhereUniqueInput[]
    connect?: ProtocolDayUserExerciseWhereUniqueInput | ProtocolDayUserExerciseWhereUniqueInput[]
    update?: ProtocolDayUserExerciseUpdateWithWhereUniqueWithoutUserExerciseInput | ProtocolDayUserExerciseUpdateWithWhereUniqueWithoutUserExerciseInput[]
    updateMany?: ProtocolDayUserExerciseUpdateManyWithWhereWithoutUserExerciseInput | ProtocolDayUserExerciseUpdateManyWithWhereWithoutUserExerciseInput[]
    deleteMany?: ProtocolDayUserExerciseScalarWhereInput | ProtocolDayUserExerciseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProtocolsInput = {
    create?: XOR<UserCreateWithoutProtocolsInput, UserUncheckedCreateWithoutProtocolsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProtocolsInput
    connect?: UserWhereUniqueInput
  }

  export type ProtocolDayCreateNestedManyWithoutProtocolInput = {
    create?: XOR<ProtocolDayCreateWithoutProtocolInput, ProtocolDayUncheckedCreateWithoutProtocolInput> | ProtocolDayCreateWithoutProtocolInput[] | ProtocolDayUncheckedCreateWithoutProtocolInput[]
    connectOrCreate?: ProtocolDayCreateOrConnectWithoutProtocolInput | ProtocolDayCreateOrConnectWithoutProtocolInput[]
    createMany?: ProtocolDayCreateManyProtocolInputEnvelope
    connect?: ProtocolDayWhereUniqueInput | ProtocolDayWhereUniqueInput[]
  }

  export type ProtocolDayUncheckedCreateNestedManyWithoutProtocolInput = {
    create?: XOR<ProtocolDayCreateWithoutProtocolInput, ProtocolDayUncheckedCreateWithoutProtocolInput> | ProtocolDayCreateWithoutProtocolInput[] | ProtocolDayUncheckedCreateWithoutProtocolInput[]
    connectOrCreate?: ProtocolDayCreateOrConnectWithoutProtocolInput | ProtocolDayCreateOrConnectWithoutProtocolInput[]
    createMany?: ProtocolDayCreateManyProtocolInputEnvelope
    connect?: ProtocolDayWhereUniqueInput | ProtocolDayWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutProtocolsNestedInput = {
    create?: XOR<UserCreateWithoutProtocolsInput, UserUncheckedCreateWithoutProtocolsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProtocolsInput
    upsert?: UserUpsertWithoutProtocolsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProtocolsInput, UserUpdateWithoutProtocolsInput>, UserUncheckedUpdateWithoutProtocolsInput>
  }

  export type ProtocolDayUpdateManyWithoutProtocolNestedInput = {
    create?: XOR<ProtocolDayCreateWithoutProtocolInput, ProtocolDayUncheckedCreateWithoutProtocolInput> | ProtocolDayCreateWithoutProtocolInput[] | ProtocolDayUncheckedCreateWithoutProtocolInput[]
    connectOrCreate?: ProtocolDayCreateOrConnectWithoutProtocolInput | ProtocolDayCreateOrConnectWithoutProtocolInput[]
    upsert?: ProtocolDayUpsertWithWhereUniqueWithoutProtocolInput | ProtocolDayUpsertWithWhereUniqueWithoutProtocolInput[]
    createMany?: ProtocolDayCreateManyProtocolInputEnvelope
    set?: ProtocolDayWhereUniqueInput | ProtocolDayWhereUniqueInput[]
    disconnect?: ProtocolDayWhereUniqueInput | ProtocolDayWhereUniqueInput[]
    delete?: ProtocolDayWhereUniqueInput | ProtocolDayWhereUniqueInput[]
    connect?: ProtocolDayWhereUniqueInput | ProtocolDayWhereUniqueInput[]
    update?: ProtocolDayUpdateWithWhereUniqueWithoutProtocolInput | ProtocolDayUpdateWithWhereUniqueWithoutProtocolInput[]
    updateMany?: ProtocolDayUpdateManyWithWhereWithoutProtocolInput | ProtocolDayUpdateManyWithWhereWithoutProtocolInput[]
    deleteMany?: ProtocolDayScalarWhereInput | ProtocolDayScalarWhereInput[]
  }

  export type ProtocolDayUncheckedUpdateManyWithoutProtocolNestedInput = {
    create?: XOR<ProtocolDayCreateWithoutProtocolInput, ProtocolDayUncheckedCreateWithoutProtocolInput> | ProtocolDayCreateWithoutProtocolInput[] | ProtocolDayUncheckedCreateWithoutProtocolInput[]
    connectOrCreate?: ProtocolDayCreateOrConnectWithoutProtocolInput | ProtocolDayCreateOrConnectWithoutProtocolInput[]
    upsert?: ProtocolDayUpsertWithWhereUniqueWithoutProtocolInput | ProtocolDayUpsertWithWhereUniqueWithoutProtocolInput[]
    createMany?: ProtocolDayCreateManyProtocolInputEnvelope
    set?: ProtocolDayWhereUniqueInput | ProtocolDayWhereUniqueInput[]
    disconnect?: ProtocolDayWhereUniqueInput | ProtocolDayWhereUniqueInput[]
    delete?: ProtocolDayWhereUniqueInput | ProtocolDayWhereUniqueInput[]
    connect?: ProtocolDayWhereUniqueInput | ProtocolDayWhereUniqueInput[]
    update?: ProtocolDayUpdateWithWhereUniqueWithoutProtocolInput | ProtocolDayUpdateWithWhereUniqueWithoutProtocolInput[]
    updateMany?: ProtocolDayUpdateManyWithWhereWithoutProtocolInput | ProtocolDayUpdateManyWithWhereWithoutProtocolInput[]
    deleteMany?: ProtocolDayScalarWhereInput | ProtocolDayScalarWhereInput[]
  }

  export type ProtocolCreateNestedOneWithoutProtocolDaysInput = {
    create?: XOR<ProtocolCreateWithoutProtocolDaysInput, ProtocolUncheckedCreateWithoutProtocolDaysInput>
    connectOrCreate?: ProtocolCreateOrConnectWithoutProtocolDaysInput
    connect?: ProtocolWhereUniqueInput
  }

  export type WorkoutCreateNestedManyWithoutProtocolDayInput = {
    create?: XOR<WorkoutCreateWithoutProtocolDayInput, WorkoutUncheckedCreateWithoutProtocolDayInput> | WorkoutCreateWithoutProtocolDayInput[] | WorkoutUncheckedCreateWithoutProtocolDayInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutProtocolDayInput | WorkoutCreateOrConnectWithoutProtocolDayInput[]
    createMany?: WorkoutCreateManyProtocolDayInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type ProtocolDayUserExerciseCreateNestedManyWithoutProtocolDayInput = {
    create?: XOR<ProtocolDayUserExerciseCreateWithoutProtocolDayInput, ProtocolDayUserExerciseUncheckedCreateWithoutProtocolDayInput> | ProtocolDayUserExerciseCreateWithoutProtocolDayInput[] | ProtocolDayUserExerciseUncheckedCreateWithoutProtocolDayInput[]
    connectOrCreate?: ProtocolDayUserExerciseCreateOrConnectWithoutProtocolDayInput | ProtocolDayUserExerciseCreateOrConnectWithoutProtocolDayInput[]
    createMany?: ProtocolDayUserExerciseCreateManyProtocolDayInputEnvelope
    connect?: ProtocolDayUserExerciseWhereUniqueInput | ProtocolDayUserExerciseWhereUniqueInput[]
  }

  export type WorkoutUncheckedCreateNestedManyWithoutProtocolDayInput = {
    create?: XOR<WorkoutCreateWithoutProtocolDayInput, WorkoutUncheckedCreateWithoutProtocolDayInput> | WorkoutCreateWithoutProtocolDayInput[] | WorkoutUncheckedCreateWithoutProtocolDayInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutProtocolDayInput | WorkoutCreateOrConnectWithoutProtocolDayInput[]
    createMany?: WorkoutCreateManyProtocolDayInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type ProtocolDayUserExerciseUncheckedCreateNestedManyWithoutProtocolDayInput = {
    create?: XOR<ProtocolDayUserExerciseCreateWithoutProtocolDayInput, ProtocolDayUserExerciseUncheckedCreateWithoutProtocolDayInput> | ProtocolDayUserExerciseCreateWithoutProtocolDayInput[] | ProtocolDayUserExerciseUncheckedCreateWithoutProtocolDayInput[]
    connectOrCreate?: ProtocolDayUserExerciseCreateOrConnectWithoutProtocolDayInput | ProtocolDayUserExerciseCreateOrConnectWithoutProtocolDayInput[]
    createMany?: ProtocolDayUserExerciseCreateManyProtocolDayInputEnvelope
    connect?: ProtocolDayUserExerciseWhereUniqueInput | ProtocolDayUserExerciseWhereUniqueInput[]
  }

  export type ProtocolUpdateOneRequiredWithoutProtocolDaysNestedInput = {
    create?: XOR<ProtocolCreateWithoutProtocolDaysInput, ProtocolUncheckedCreateWithoutProtocolDaysInput>
    connectOrCreate?: ProtocolCreateOrConnectWithoutProtocolDaysInput
    upsert?: ProtocolUpsertWithoutProtocolDaysInput
    connect?: ProtocolWhereUniqueInput
    update?: XOR<XOR<ProtocolUpdateToOneWithWhereWithoutProtocolDaysInput, ProtocolUpdateWithoutProtocolDaysInput>, ProtocolUncheckedUpdateWithoutProtocolDaysInput>
  }

  export type WorkoutUpdateManyWithoutProtocolDayNestedInput = {
    create?: XOR<WorkoutCreateWithoutProtocolDayInput, WorkoutUncheckedCreateWithoutProtocolDayInput> | WorkoutCreateWithoutProtocolDayInput[] | WorkoutUncheckedCreateWithoutProtocolDayInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutProtocolDayInput | WorkoutCreateOrConnectWithoutProtocolDayInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutProtocolDayInput | WorkoutUpsertWithWhereUniqueWithoutProtocolDayInput[]
    createMany?: WorkoutCreateManyProtocolDayInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutProtocolDayInput | WorkoutUpdateWithWhereUniqueWithoutProtocolDayInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutProtocolDayInput | WorkoutUpdateManyWithWhereWithoutProtocolDayInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type ProtocolDayUserExerciseUpdateManyWithoutProtocolDayNestedInput = {
    create?: XOR<ProtocolDayUserExerciseCreateWithoutProtocolDayInput, ProtocolDayUserExerciseUncheckedCreateWithoutProtocolDayInput> | ProtocolDayUserExerciseCreateWithoutProtocolDayInput[] | ProtocolDayUserExerciseUncheckedCreateWithoutProtocolDayInput[]
    connectOrCreate?: ProtocolDayUserExerciseCreateOrConnectWithoutProtocolDayInput | ProtocolDayUserExerciseCreateOrConnectWithoutProtocolDayInput[]
    upsert?: ProtocolDayUserExerciseUpsertWithWhereUniqueWithoutProtocolDayInput | ProtocolDayUserExerciseUpsertWithWhereUniqueWithoutProtocolDayInput[]
    createMany?: ProtocolDayUserExerciseCreateManyProtocolDayInputEnvelope
    set?: ProtocolDayUserExerciseWhereUniqueInput | ProtocolDayUserExerciseWhereUniqueInput[]
    disconnect?: ProtocolDayUserExerciseWhereUniqueInput | ProtocolDayUserExerciseWhereUniqueInput[]
    delete?: ProtocolDayUserExerciseWhereUniqueInput | ProtocolDayUserExerciseWhereUniqueInput[]
    connect?: ProtocolDayUserExerciseWhereUniqueInput | ProtocolDayUserExerciseWhereUniqueInput[]
    update?: ProtocolDayUserExerciseUpdateWithWhereUniqueWithoutProtocolDayInput | ProtocolDayUserExerciseUpdateWithWhereUniqueWithoutProtocolDayInput[]
    updateMany?: ProtocolDayUserExerciseUpdateManyWithWhereWithoutProtocolDayInput | ProtocolDayUserExerciseUpdateManyWithWhereWithoutProtocolDayInput[]
    deleteMany?: ProtocolDayUserExerciseScalarWhereInput | ProtocolDayUserExerciseScalarWhereInput[]
  }

  export type WorkoutUncheckedUpdateManyWithoutProtocolDayNestedInput = {
    create?: XOR<WorkoutCreateWithoutProtocolDayInput, WorkoutUncheckedCreateWithoutProtocolDayInput> | WorkoutCreateWithoutProtocolDayInput[] | WorkoutUncheckedCreateWithoutProtocolDayInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutProtocolDayInput | WorkoutCreateOrConnectWithoutProtocolDayInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutProtocolDayInput | WorkoutUpsertWithWhereUniqueWithoutProtocolDayInput[]
    createMany?: WorkoutCreateManyProtocolDayInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutProtocolDayInput | WorkoutUpdateWithWhereUniqueWithoutProtocolDayInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutProtocolDayInput | WorkoutUpdateManyWithWhereWithoutProtocolDayInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type ProtocolDayUserExerciseUncheckedUpdateManyWithoutProtocolDayNestedInput = {
    create?: XOR<ProtocolDayUserExerciseCreateWithoutProtocolDayInput, ProtocolDayUserExerciseUncheckedCreateWithoutProtocolDayInput> | ProtocolDayUserExerciseCreateWithoutProtocolDayInput[] | ProtocolDayUserExerciseUncheckedCreateWithoutProtocolDayInput[]
    connectOrCreate?: ProtocolDayUserExerciseCreateOrConnectWithoutProtocolDayInput | ProtocolDayUserExerciseCreateOrConnectWithoutProtocolDayInput[]
    upsert?: ProtocolDayUserExerciseUpsertWithWhereUniqueWithoutProtocolDayInput | ProtocolDayUserExerciseUpsertWithWhereUniqueWithoutProtocolDayInput[]
    createMany?: ProtocolDayUserExerciseCreateManyProtocolDayInputEnvelope
    set?: ProtocolDayUserExerciseWhereUniqueInput | ProtocolDayUserExerciseWhereUniqueInput[]
    disconnect?: ProtocolDayUserExerciseWhereUniqueInput | ProtocolDayUserExerciseWhereUniqueInput[]
    delete?: ProtocolDayUserExerciseWhereUniqueInput | ProtocolDayUserExerciseWhereUniqueInput[]
    connect?: ProtocolDayUserExerciseWhereUniqueInput | ProtocolDayUserExerciseWhereUniqueInput[]
    update?: ProtocolDayUserExerciseUpdateWithWhereUniqueWithoutProtocolDayInput | ProtocolDayUserExerciseUpdateWithWhereUniqueWithoutProtocolDayInput[]
    updateMany?: ProtocolDayUserExerciseUpdateManyWithWhereWithoutProtocolDayInput | ProtocolDayUserExerciseUpdateManyWithWhereWithoutProtocolDayInput[]
    deleteMany?: ProtocolDayUserExerciseScalarWhereInput | ProtocolDayUserExerciseScalarWhereInput[]
  }

  export type ProtocolDayCreateNestedOneWithoutWorkoutsInput = {
    create?: XOR<ProtocolDayCreateWithoutWorkoutsInput, ProtocolDayUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: ProtocolDayCreateOrConnectWithoutWorkoutsInput
    connect?: ProtocolDayWhereUniqueInput
  }

  export type ExerciseRecordCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<ExerciseRecordCreateWithoutWorkoutInput, ExerciseRecordUncheckedCreateWithoutWorkoutInput> | ExerciseRecordCreateWithoutWorkoutInput[] | ExerciseRecordUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: ExerciseRecordCreateOrConnectWithoutWorkoutInput | ExerciseRecordCreateOrConnectWithoutWorkoutInput[]
    createMany?: ExerciseRecordCreateManyWorkoutInputEnvelope
    connect?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
  }

  export type ExerciseRecordUncheckedCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<ExerciseRecordCreateWithoutWorkoutInput, ExerciseRecordUncheckedCreateWithoutWorkoutInput> | ExerciseRecordCreateWithoutWorkoutInput[] | ExerciseRecordUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: ExerciseRecordCreateOrConnectWithoutWorkoutInput | ExerciseRecordCreateOrConnectWithoutWorkoutInput[]
    createMany?: ExerciseRecordCreateManyWorkoutInputEnvelope
    connect?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
  }

  export type ProtocolDayUpdateOneRequiredWithoutWorkoutsNestedInput = {
    create?: XOR<ProtocolDayCreateWithoutWorkoutsInput, ProtocolDayUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: ProtocolDayCreateOrConnectWithoutWorkoutsInput
    upsert?: ProtocolDayUpsertWithoutWorkoutsInput
    connect?: ProtocolDayWhereUniqueInput
    update?: XOR<XOR<ProtocolDayUpdateToOneWithWhereWithoutWorkoutsInput, ProtocolDayUpdateWithoutWorkoutsInput>, ProtocolDayUncheckedUpdateWithoutWorkoutsInput>
  }

  export type ExerciseRecordUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<ExerciseRecordCreateWithoutWorkoutInput, ExerciseRecordUncheckedCreateWithoutWorkoutInput> | ExerciseRecordCreateWithoutWorkoutInput[] | ExerciseRecordUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: ExerciseRecordCreateOrConnectWithoutWorkoutInput | ExerciseRecordCreateOrConnectWithoutWorkoutInput[]
    upsert?: ExerciseRecordUpsertWithWhereUniqueWithoutWorkoutInput | ExerciseRecordUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: ExerciseRecordCreateManyWorkoutInputEnvelope
    set?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    disconnect?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    delete?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    connect?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    update?: ExerciseRecordUpdateWithWhereUniqueWithoutWorkoutInput | ExerciseRecordUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: ExerciseRecordUpdateManyWithWhereWithoutWorkoutInput | ExerciseRecordUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: ExerciseRecordScalarWhereInput | ExerciseRecordScalarWhereInput[]
  }

  export type ExerciseRecordUncheckedUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<ExerciseRecordCreateWithoutWorkoutInput, ExerciseRecordUncheckedCreateWithoutWorkoutInput> | ExerciseRecordCreateWithoutWorkoutInput[] | ExerciseRecordUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: ExerciseRecordCreateOrConnectWithoutWorkoutInput | ExerciseRecordCreateOrConnectWithoutWorkoutInput[]
    upsert?: ExerciseRecordUpsertWithWhereUniqueWithoutWorkoutInput | ExerciseRecordUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: ExerciseRecordCreateManyWorkoutInputEnvelope
    set?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    disconnect?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    delete?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    connect?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    update?: ExerciseRecordUpdateWithWhereUniqueWithoutWorkoutInput | ExerciseRecordUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: ExerciseRecordUpdateManyWithWhereWithoutWorkoutInput | ExerciseRecordUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: ExerciseRecordScalarWhereInput | ExerciseRecordScalarWhereInput[]
  }

  export type WorkoutCreateNestedOneWithoutExerciseRecordsInput = {
    create?: XOR<WorkoutCreateWithoutExerciseRecordsInput, WorkoutUncheckedCreateWithoutExerciseRecordsInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutExerciseRecordsInput
    connect?: WorkoutWhereUniqueInput
  }

  export type UserExerciseCreateNestedOneWithoutExerciseRecordsInput = {
    create?: XOR<UserExerciseCreateWithoutExerciseRecordsInput, UserExerciseUncheckedCreateWithoutExerciseRecordsInput>
    connectOrCreate?: UserExerciseCreateOrConnectWithoutExerciseRecordsInput
    connect?: UserExerciseWhereUniqueInput
  }

  export type WorkoutUpdateOneRequiredWithoutExerciseRecordsNestedInput = {
    create?: XOR<WorkoutCreateWithoutExerciseRecordsInput, WorkoutUncheckedCreateWithoutExerciseRecordsInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutExerciseRecordsInput
    upsert?: WorkoutUpsertWithoutExerciseRecordsInput
    connect?: WorkoutWhereUniqueInput
    update?: XOR<XOR<WorkoutUpdateToOneWithWhereWithoutExerciseRecordsInput, WorkoutUpdateWithoutExerciseRecordsInput>, WorkoutUncheckedUpdateWithoutExerciseRecordsInput>
  }

  export type UserExerciseUpdateOneRequiredWithoutExerciseRecordsNestedInput = {
    create?: XOR<UserExerciseCreateWithoutExerciseRecordsInput, UserExerciseUncheckedCreateWithoutExerciseRecordsInput>
    connectOrCreate?: UserExerciseCreateOrConnectWithoutExerciseRecordsInput
    upsert?: UserExerciseUpsertWithoutExerciseRecordsInput
    connect?: UserExerciseWhereUniqueInput
    update?: XOR<XOR<UserExerciseUpdateToOneWithWhereWithoutExerciseRecordsInput, UserExerciseUpdateWithoutExerciseRecordsInput>, UserExerciseUncheckedUpdateWithoutExerciseRecordsInput>
  }

  export type UserExerciseCreateNestedOneWithoutProtocolDayUserExercisesInput = {
    create?: XOR<UserExerciseCreateWithoutProtocolDayUserExercisesInput, UserExerciseUncheckedCreateWithoutProtocolDayUserExercisesInput>
    connectOrCreate?: UserExerciseCreateOrConnectWithoutProtocolDayUserExercisesInput
    connect?: UserExerciseWhereUniqueInput
  }

  export type ProtocolDayCreateNestedOneWithoutProtocolDayUserExercisesInput = {
    create?: XOR<ProtocolDayCreateWithoutProtocolDayUserExercisesInput, ProtocolDayUncheckedCreateWithoutProtocolDayUserExercisesInput>
    connectOrCreate?: ProtocolDayCreateOrConnectWithoutProtocolDayUserExercisesInput
    connect?: ProtocolDayWhereUniqueInput
  }

  export type UserExerciseUpdateOneRequiredWithoutProtocolDayUserExercisesNestedInput = {
    create?: XOR<UserExerciseCreateWithoutProtocolDayUserExercisesInput, UserExerciseUncheckedCreateWithoutProtocolDayUserExercisesInput>
    connectOrCreate?: UserExerciseCreateOrConnectWithoutProtocolDayUserExercisesInput
    upsert?: UserExerciseUpsertWithoutProtocolDayUserExercisesInput
    connect?: UserExerciseWhereUniqueInput
    update?: XOR<XOR<UserExerciseUpdateToOneWithWhereWithoutProtocolDayUserExercisesInput, UserExerciseUpdateWithoutProtocolDayUserExercisesInput>, UserExerciseUncheckedUpdateWithoutProtocolDayUserExercisesInput>
  }

  export type ProtocolDayUpdateOneRequiredWithoutProtocolDayUserExercisesNestedInput = {
    create?: XOR<ProtocolDayCreateWithoutProtocolDayUserExercisesInput, ProtocolDayUncheckedCreateWithoutProtocolDayUserExercisesInput>
    connectOrCreate?: ProtocolDayCreateOrConnectWithoutProtocolDayUserExercisesInput
    upsert?: ProtocolDayUpsertWithoutProtocolDayUserExercisesInput
    connect?: ProtocolDayWhereUniqueInput
    update?: XOR<XOR<ProtocolDayUpdateToOneWithWhereWithoutProtocolDayUserExercisesInput, ProtocolDayUpdateWithoutProtocolDayUserExercisesInput>, ProtocolDayUncheckedUpdateWithoutProtocolDayUserExercisesInput>
  }

  export type WeightProgramCreateNestedOneWithoutWeightRecordsInput = {
    create?: XOR<WeightProgramCreateWithoutWeightRecordsInput, WeightProgramUncheckedCreateWithoutWeightRecordsInput>
    connectOrCreate?: WeightProgramCreateOrConnectWithoutWeightRecordsInput
    connect?: WeightProgramWhereUniqueInput
  }

  export type WeightProgramUpdateOneRequiredWithoutWeightRecordsNestedInput = {
    create?: XOR<WeightProgramCreateWithoutWeightRecordsInput, WeightProgramUncheckedCreateWithoutWeightRecordsInput>
    connectOrCreate?: WeightProgramCreateOrConnectWithoutWeightRecordsInput
    upsert?: WeightProgramUpsertWithoutWeightRecordsInput
    connect?: WeightProgramWhereUniqueInput
    update?: XOR<XOR<WeightProgramUpdateToOneWithWhereWithoutWeightRecordsInput, WeightProgramUpdateWithoutWeightRecordsInput>, WeightProgramUncheckedUpdateWithoutWeightRecordsInput>
  }

  export type UserCreateNestedOneWithoutWeightProgramsInput = {
    create?: XOR<UserCreateWithoutWeightProgramsInput, UserUncheckedCreateWithoutWeightProgramsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeightProgramsInput
    connect?: UserWhereUniqueInput
  }

  export type WeightRecordCreateNestedManyWithoutWeightProgramInput = {
    create?: XOR<WeightRecordCreateWithoutWeightProgramInput, WeightRecordUncheckedCreateWithoutWeightProgramInput> | WeightRecordCreateWithoutWeightProgramInput[] | WeightRecordUncheckedCreateWithoutWeightProgramInput[]
    connectOrCreate?: WeightRecordCreateOrConnectWithoutWeightProgramInput | WeightRecordCreateOrConnectWithoutWeightProgramInput[]
    createMany?: WeightRecordCreateManyWeightProgramInputEnvelope
    connect?: WeightRecordWhereUniqueInput | WeightRecordWhereUniqueInput[]
  }

  export type WeightRecordUncheckedCreateNestedManyWithoutWeightProgramInput = {
    create?: XOR<WeightRecordCreateWithoutWeightProgramInput, WeightRecordUncheckedCreateWithoutWeightProgramInput> | WeightRecordCreateWithoutWeightProgramInput[] | WeightRecordUncheckedCreateWithoutWeightProgramInput[]
    connectOrCreate?: WeightRecordCreateOrConnectWithoutWeightProgramInput | WeightRecordCreateOrConnectWithoutWeightProgramInput[]
    createMany?: WeightRecordCreateManyWeightProgramInputEnvelope
    connect?: WeightRecordWhereUniqueInput | WeightRecordWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWeightProgramsNestedInput = {
    create?: XOR<UserCreateWithoutWeightProgramsInput, UserUncheckedCreateWithoutWeightProgramsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeightProgramsInput
    upsert?: UserUpsertWithoutWeightProgramsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWeightProgramsInput, UserUpdateWithoutWeightProgramsInput>, UserUncheckedUpdateWithoutWeightProgramsInput>
  }

  export type WeightRecordUpdateManyWithoutWeightProgramNestedInput = {
    create?: XOR<WeightRecordCreateWithoutWeightProgramInput, WeightRecordUncheckedCreateWithoutWeightProgramInput> | WeightRecordCreateWithoutWeightProgramInput[] | WeightRecordUncheckedCreateWithoutWeightProgramInput[]
    connectOrCreate?: WeightRecordCreateOrConnectWithoutWeightProgramInput | WeightRecordCreateOrConnectWithoutWeightProgramInput[]
    upsert?: WeightRecordUpsertWithWhereUniqueWithoutWeightProgramInput | WeightRecordUpsertWithWhereUniqueWithoutWeightProgramInput[]
    createMany?: WeightRecordCreateManyWeightProgramInputEnvelope
    set?: WeightRecordWhereUniqueInput | WeightRecordWhereUniqueInput[]
    disconnect?: WeightRecordWhereUniqueInput | WeightRecordWhereUniqueInput[]
    delete?: WeightRecordWhereUniqueInput | WeightRecordWhereUniqueInput[]
    connect?: WeightRecordWhereUniqueInput | WeightRecordWhereUniqueInput[]
    update?: WeightRecordUpdateWithWhereUniqueWithoutWeightProgramInput | WeightRecordUpdateWithWhereUniqueWithoutWeightProgramInput[]
    updateMany?: WeightRecordUpdateManyWithWhereWithoutWeightProgramInput | WeightRecordUpdateManyWithWhereWithoutWeightProgramInput[]
    deleteMany?: WeightRecordScalarWhereInput | WeightRecordScalarWhereInput[]
  }

  export type WeightRecordUncheckedUpdateManyWithoutWeightProgramNestedInput = {
    create?: XOR<WeightRecordCreateWithoutWeightProgramInput, WeightRecordUncheckedCreateWithoutWeightProgramInput> | WeightRecordCreateWithoutWeightProgramInput[] | WeightRecordUncheckedCreateWithoutWeightProgramInput[]
    connectOrCreate?: WeightRecordCreateOrConnectWithoutWeightProgramInput | WeightRecordCreateOrConnectWithoutWeightProgramInput[]
    upsert?: WeightRecordUpsertWithWhereUniqueWithoutWeightProgramInput | WeightRecordUpsertWithWhereUniqueWithoutWeightProgramInput[]
    createMany?: WeightRecordCreateManyWeightProgramInputEnvelope
    set?: WeightRecordWhereUniqueInput | WeightRecordWhereUniqueInput[]
    disconnect?: WeightRecordWhereUniqueInput | WeightRecordWhereUniqueInput[]
    delete?: WeightRecordWhereUniqueInput | WeightRecordWhereUniqueInput[]
    connect?: WeightRecordWhereUniqueInput | WeightRecordWhereUniqueInput[]
    update?: WeightRecordUpdateWithWhereUniqueWithoutWeightProgramInput | WeightRecordUpdateWithWhereUniqueWithoutWeightProgramInput[]
    updateMany?: WeightRecordUpdateManyWithWhereWithoutWeightProgramInput | WeightRecordUpdateManyWithWhereWithoutWeightProgramInput[]
    deleteMany?: WeightRecordScalarWhereInput | WeightRecordScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserExerciseCreateWithoutUserInput = {
    currSets: number
    currReps: number
    currWeight: number
    createdAt?: Date | string
    exercise: ExerciseCreateNestedOneWithoutUserExcercisesInput
    exerciseRecords?: ExerciseRecordCreateNestedManyWithoutUserExerciseInput
    protocolDayUserExercises?: ProtocolDayUserExerciseCreateNestedManyWithoutUserExerciseInput
  }

  export type UserExerciseUncheckedCreateWithoutUserInput = {
    id?: number
    currSets: number
    currReps: number
    currWeight: number
    exerciseId: number
    createdAt?: Date | string
    exerciseRecords?: ExerciseRecordUncheckedCreateNestedManyWithoutUserExerciseInput
    protocolDayUserExercises?: ProtocolDayUserExerciseUncheckedCreateNestedManyWithoutUserExerciseInput
  }

  export type UserExerciseCreateOrConnectWithoutUserInput = {
    where: UserExerciseWhereUniqueInput
    create: XOR<UserExerciseCreateWithoutUserInput, UserExerciseUncheckedCreateWithoutUserInput>
  }

  export type UserExerciseCreateManyUserInputEnvelope = {
    data: UserExerciseCreateManyUserInput | UserExerciseCreateManyUserInput[]
  }

  export type ProtocolCreateWithoutUserInput = {
    name: string
    createdAt?: Date | string
    startedAt?: Date | string
    active: boolean
    protocolDays?: ProtocolDayCreateNestedManyWithoutProtocolInput
  }

  export type ProtocolUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    createdAt?: Date | string
    startedAt?: Date | string
    active: boolean
    protocolDays?: ProtocolDayUncheckedCreateNestedManyWithoutProtocolInput
  }

  export type ProtocolCreateOrConnectWithoutUserInput = {
    where: ProtocolWhereUniqueInput
    create: XOR<ProtocolCreateWithoutUserInput, ProtocolUncheckedCreateWithoutUserInput>
  }

  export type ProtocolCreateManyUserInputEnvelope = {
    data: ProtocolCreateManyUserInput | ProtocolCreateManyUserInput[]
  }

  export type WeightProgramCreateWithoutUserInput = {
    createdAt?: Date | string
    active: boolean
    goalWeight: number
    mode: string
    weightRecords?: WeightRecordCreateNestedManyWithoutWeightProgramInput
  }

  export type WeightProgramUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    active: boolean
    goalWeight: number
    mode: string
    weightRecords?: WeightRecordUncheckedCreateNestedManyWithoutWeightProgramInput
  }

  export type WeightProgramCreateOrConnectWithoutUserInput = {
    where: WeightProgramWhereUniqueInput
    create: XOR<WeightProgramCreateWithoutUserInput, WeightProgramUncheckedCreateWithoutUserInput>
  }

  export type WeightProgramCreateManyUserInputEnvelope = {
    data: WeightProgramCreateManyUserInput | WeightProgramCreateManyUserInput[]
  }

  export type UserExerciseUpsertWithWhereUniqueWithoutUserInput = {
    where: UserExerciseWhereUniqueInput
    update: XOR<UserExerciseUpdateWithoutUserInput, UserExerciseUncheckedUpdateWithoutUserInput>
    create: XOR<UserExerciseCreateWithoutUserInput, UserExerciseUncheckedCreateWithoutUserInput>
  }

  export type UserExerciseUpdateWithWhereUniqueWithoutUserInput = {
    where: UserExerciseWhereUniqueInput
    data: XOR<UserExerciseUpdateWithoutUserInput, UserExerciseUncheckedUpdateWithoutUserInput>
  }

  export type UserExerciseUpdateManyWithWhereWithoutUserInput = {
    where: UserExerciseScalarWhereInput
    data: XOR<UserExerciseUpdateManyMutationInput, UserExerciseUncheckedUpdateManyWithoutUserInput>
  }

  export type UserExerciseScalarWhereInput = {
    AND?: UserExerciseScalarWhereInput | UserExerciseScalarWhereInput[]
    OR?: UserExerciseScalarWhereInput[]
    NOT?: UserExerciseScalarWhereInput | UserExerciseScalarWhereInput[]
    id?: IntFilter<"UserExercise"> | number
    userId?: IntFilter<"UserExercise"> | number
    currSets?: IntFilter<"UserExercise"> | number
    currReps?: IntFilter<"UserExercise"> | number
    currWeight?: FloatFilter<"UserExercise"> | number
    exerciseId?: IntFilter<"UserExercise"> | number
    createdAt?: DateTimeFilter<"UserExercise"> | Date | string
  }

  export type ProtocolUpsertWithWhereUniqueWithoutUserInput = {
    where: ProtocolWhereUniqueInput
    update: XOR<ProtocolUpdateWithoutUserInput, ProtocolUncheckedUpdateWithoutUserInput>
    create: XOR<ProtocolCreateWithoutUserInput, ProtocolUncheckedCreateWithoutUserInput>
  }

  export type ProtocolUpdateWithWhereUniqueWithoutUserInput = {
    where: ProtocolWhereUniqueInput
    data: XOR<ProtocolUpdateWithoutUserInput, ProtocolUncheckedUpdateWithoutUserInput>
  }

  export type ProtocolUpdateManyWithWhereWithoutUserInput = {
    where: ProtocolScalarWhereInput
    data: XOR<ProtocolUpdateManyMutationInput, ProtocolUncheckedUpdateManyWithoutUserInput>
  }

  export type ProtocolScalarWhereInput = {
    AND?: ProtocolScalarWhereInput | ProtocolScalarWhereInput[]
    OR?: ProtocolScalarWhereInput[]
    NOT?: ProtocolScalarWhereInput | ProtocolScalarWhereInput[]
    id?: IntFilter<"Protocol"> | number
    name?: StringFilter<"Protocol"> | string
    createdAt?: DateTimeFilter<"Protocol"> | Date | string
    startedAt?: DateTimeFilter<"Protocol"> | Date | string
    active?: BoolFilter<"Protocol"> | boolean
    userId?: IntFilter<"Protocol"> | number
  }

  export type WeightProgramUpsertWithWhereUniqueWithoutUserInput = {
    where: WeightProgramWhereUniqueInput
    update: XOR<WeightProgramUpdateWithoutUserInput, WeightProgramUncheckedUpdateWithoutUserInput>
    create: XOR<WeightProgramCreateWithoutUserInput, WeightProgramUncheckedCreateWithoutUserInput>
  }

  export type WeightProgramUpdateWithWhereUniqueWithoutUserInput = {
    where: WeightProgramWhereUniqueInput
    data: XOR<WeightProgramUpdateWithoutUserInput, WeightProgramUncheckedUpdateWithoutUserInput>
  }

  export type WeightProgramUpdateManyWithWhereWithoutUserInput = {
    where: WeightProgramScalarWhereInput
    data: XOR<WeightProgramUpdateManyMutationInput, WeightProgramUncheckedUpdateManyWithoutUserInput>
  }

  export type WeightProgramScalarWhereInput = {
    AND?: WeightProgramScalarWhereInput | WeightProgramScalarWhereInput[]
    OR?: WeightProgramScalarWhereInput[]
    NOT?: WeightProgramScalarWhereInput | WeightProgramScalarWhereInput[]
    id?: IntFilter<"WeightProgram"> | number
    createdAt?: DateTimeFilter<"WeightProgram"> | Date | string
    active?: BoolFilter<"WeightProgram"> | boolean
    goalWeight?: FloatFilter<"WeightProgram"> | number
    mode?: StringFilter<"WeightProgram"> | string
    userId?: IntFilter<"WeightProgram"> | number
  }

  export type UserExerciseCreateWithoutExerciseInput = {
    currSets: number
    currReps: number
    currWeight: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserExcercisesInput
    exerciseRecords?: ExerciseRecordCreateNestedManyWithoutUserExerciseInput
    protocolDayUserExercises?: ProtocolDayUserExerciseCreateNestedManyWithoutUserExerciseInput
  }

  export type UserExerciseUncheckedCreateWithoutExerciseInput = {
    id?: number
    userId: number
    currSets: number
    currReps: number
    currWeight: number
    createdAt?: Date | string
    exerciseRecords?: ExerciseRecordUncheckedCreateNestedManyWithoutUserExerciseInput
    protocolDayUserExercises?: ProtocolDayUserExerciseUncheckedCreateNestedManyWithoutUserExerciseInput
  }

  export type UserExerciseCreateOrConnectWithoutExerciseInput = {
    where: UserExerciseWhereUniqueInput
    create: XOR<UserExerciseCreateWithoutExerciseInput, UserExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type UserExerciseCreateManyExerciseInputEnvelope = {
    data: UserExerciseCreateManyExerciseInput | UserExerciseCreateManyExerciseInput[]
  }

  export type UserExerciseUpsertWithWhereUniqueWithoutExerciseInput = {
    where: UserExerciseWhereUniqueInput
    update: XOR<UserExerciseUpdateWithoutExerciseInput, UserExerciseUncheckedUpdateWithoutExerciseInput>
    create: XOR<UserExerciseCreateWithoutExerciseInput, UserExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type UserExerciseUpdateWithWhereUniqueWithoutExerciseInput = {
    where: UserExerciseWhereUniqueInput
    data: XOR<UserExerciseUpdateWithoutExerciseInput, UserExerciseUncheckedUpdateWithoutExerciseInput>
  }

  export type UserExerciseUpdateManyWithWhereWithoutExerciseInput = {
    where: UserExerciseScalarWhereInput
    data: XOR<UserExerciseUpdateManyMutationInput, UserExerciseUncheckedUpdateManyWithoutExerciseInput>
  }

  export type UserCreateWithoutUserExcercisesInput = {
    email: string
    createdAt?: Date | string
    firstName?: string | null
    lastName?: string | null
    birthDate: Date | string
    gender: string
    weight: number
    height: number
    password: string
    measurementUnit: string
    exerciseWeightUnit: string
    protocols?: ProtocolCreateNestedManyWithoutUserInput
    weightPrograms?: WeightProgramCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserExcercisesInput = {
    id?: number
    email: string
    createdAt?: Date | string
    firstName?: string | null
    lastName?: string | null
    birthDate: Date | string
    gender: string
    weight: number
    height: number
    password: string
    measurementUnit: string
    exerciseWeightUnit: string
    protocols?: ProtocolUncheckedCreateNestedManyWithoutUserInput
    weightPrograms?: WeightProgramUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserExcercisesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserExcercisesInput, UserUncheckedCreateWithoutUserExcercisesInput>
  }

  export type ExerciseCreateWithoutUserExcercisesInput = {
    name: string
    iconPath: string
    muscleGroup: string
    description: string
  }

  export type ExerciseUncheckedCreateWithoutUserExcercisesInput = {
    id?: number
    name: string
    iconPath: string
    muscleGroup: string
    description: string
  }

  export type ExerciseCreateOrConnectWithoutUserExcercisesInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutUserExcercisesInput, ExerciseUncheckedCreateWithoutUserExcercisesInput>
  }

  export type ExerciseRecordCreateWithoutUserExerciseInput = {
    reps: number
    set: number
    weight: number
    workout: WorkoutCreateNestedOneWithoutExerciseRecordsInput
  }

  export type ExerciseRecordUncheckedCreateWithoutUserExerciseInput = {
    id?: number
    reps: number
    set: number
    weight: number
    workoutId: number
  }

  export type ExerciseRecordCreateOrConnectWithoutUserExerciseInput = {
    where: ExerciseRecordWhereUniqueInput
    create: XOR<ExerciseRecordCreateWithoutUserExerciseInput, ExerciseRecordUncheckedCreateWithoutUserExerciseInput>
  }

  export type ExerciseRecordCreateManyUserExerciseInputEnvelope = {
    data: ExerciseRecordCreateManyUserExerciseInput | ExerciseRecordCreateManyUserExerciseInput[]
  }

  export type ProtocolDayUserExerciseCreateWithoutUserExerciseInput = {
    protocolDay: ProtocolDayCreateNestedOneWithoutProtocolDayUserExercisesInput
  }

  export type ProtocolDayUserExerciseUncheckedCreateWithoutUserExerciseInput = {
    id?: number
    protocolDayId: number
  }

  export type ProtocolDayUserExerciseCreateOrConnectWithoutUserExerciseInput = {
    where: ProtocolDayUserExerciseWhereUniqueInput
    create: XOR<ProtocolDayUserExerciseCreateWithoutUserExerciseInput, ProtocolDayUserExerciseUncheckedCreateWithoutUserExerciseInput>
  }

  export type ProtocolDayUserExerciseCreateManyUserExerciseInputEnvelope = {
    data: ProtocolDayUserExerciseCreateManyUserExerciseInput | ProtocolDayUserExerciseCreateManyUserExerciseInput[]
  }

  export type UserUpsertWithoutUserExcercisesInput = {
    update: XOR<UserUpdateWithoutUserExcercisesInput, UserUncheckedUpdateWithoutUserExcercisesInput>
    create: XOR<UserCreateWithoutUserExcercisesInput, UserUncheckedCreateWithoutUserExcercisesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserExcercisesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserExcercisesInput, UserUncheckedUpdateWithoutUserExcercisesInput>
  }

  export type UserUpdateWithoutUserExcercisesInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    measurementUnit?: StringFieldUpdateOperationsInput | string
    exerciseWeightUnit?: StringFieldUpdateOperationsInput | string
    protocols?: ProtocolUpdateManyWithoutUserNestedInput
    weightPrograms?: WeightProgramUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserExcercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    measurementUnit?: StringFieldUpdateOperationsInput | string
    exerciseWeightUnit?: StringFieldUpdateOperationsInput | string
    protocols?: ProtocolUncheckedUpdateManyWithoutUserNestedInput
    weightPrograms?: WeightProgramUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExerciseUpsertWithoutUserExcercisesInput = {
    update: XOR<ExerciseUpdateWithoutUserExcercisesInput, ExerciseUncheckedUpdateWithoutUserExcercisesInput>
    create: XOR<ExerciseCreateWithoutUserExcercisesInput, ExerciseUncheckedCreateWithoutUserExcercisesInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutUserExcercisesInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutUserExcercisesInput, ExerciseUncheckedUpdateWithoutUserExcercisesInput>
  }

  export type ExerciseUpdateWithoutUserExcercisesInput = {
    name?: StringFieldUpdateOperationsInput | string
    iconPath?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseUncheckedUpdateWithoutUserExcercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    iconPath?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseRecordUpsertWithWhereUniqueWithoutUserExerciseInput = {
    where: ExerciseRecordWhereUniqueInput
    update: XOR<ExerciseRecordUpdateWithoutUserExerciseInput, ExerciseRecordUncheckedUpdateWithoutUserExerciseInput>
    create: XOR<ExerciseRecordCreateWithoutUserExerciseInput, ExerciseRecordUncheckedCreateWithoutUserExerciseInput>
  }

  export type ExerciseRecordUpdateWithWhereUniqueWithoutUserExerciseInput = {
    where: ExerciseRecordWhereUniqueInput
    data: XOR<ExerciseRecordUpdateWithoutUserExerciseInput, ExerciseRecordUncheckedUpdateWithoutUserExerciseInput>
  }

  export type ExerciseRecordUpdateManyWithWhereWithoutUserExerciseInput = {
    where: ExerciseRecordScalarWhereInput
    data: XOR<ExerciseRecordUpdateManyMutationInput, ExerciseRecordUncheckedUpdateManyWithoutUserExerciseInput>
  }

  export type ExerciseRecordScalarWhereInput = {
    AND?: ExerciseRecordScalarWhereInput | ExerciseRecordScalarWhereInput[]
    OR?: ExerciseRecordScalarWhereInput[]
    NOT?: ExerciseRecordScalarWhereInput | ExerciseRecordScalarWhereInput[]
    id?: IntFilter<"ExerciseRecord"> | number
    reps?: IntFilter<"ExerciseRecord"> | number
    set?: IntFilter<"ExerciseRecord"> | number
    weight?: FloatFilter<"ExerciseRecord"> | number
    workoutId?: IntFilter<"ExerciseRecord"> | number
    userExerciseId?: IntFilter<"ExerciseRecord"> | number
  }

  export type ProtocolDayUserExerciseUpsertWithWhereUniqueWithoutUserExerciseInput = {
    where: ProtocolDayUserExerciseWhereUniqueInput
    update: XOR<ProtocolDayUserExerciseUpdateWithoutUserExerciseInput, ProtocolDayUserExerciseUncheckedUpdateWithoutUserExerciseInput>
    create: XOR<ProtocolDayUserExerciseCreateWithoutUserExerciseInput, ProtocolDayUserExerciseUncheckedCreateWithoutUserExerciseInput>
  }

  export type ProtocolDayUserExerciseUpdateWithWhereUniqueWithoutUserExerciseInput = {
    where: ProtocolDayUserExerciseWhereUniqueInput
    data: XOR<ProtocolDayUserExerciseUpdateWithoutUserExerciseInput, ProtocolDayUserExerciseUncheckedUpdateWithoutUserExerciseInput>
  }

  export type ProtocolDayUserExerciseUpdateManyWithWhereWithoutUserExerciseInput = {
    where: ProtocolDayUserExerciseScalarWhereInput
    data: XOR<ProtocolDayUserExerciseUpdateManyMutationInput, ProtocolDayUserExerciseUncheckedUpdateManyWithoutUserExerciseInput>
  }

  export type ProtocolDayUserExerciseScalarWhereInput = {
    AND?: ProtocolDayUserExerciseScalarWhereInput | ProtocolDayUserExerciseScalarWhereInput[]
    OR?: ProtocolDayUserExerciseScalarWhereInput[]
    NOT?: ProtocolDayUserExerciseScalarWhereInput | ProtocolDayUserExerciseScalarWhereInput[]
    id?: IntFilter<"ProtocolDayUserExercise"> | number
    userExerciseId?: IntFilter<"ProtocolDayUserExercise"> | number
    protocolDayId?: IntFilter<"ProtocolDayUserExercise"> | number
  }

  export type UserCreateWithoutProtocolsInput = {
    email: string
    createdAt?: Date | string
    firstName?: string | null
    lastName?: string | null
    birthDate: Date | string
    gender: string
    weight: number
    height: number
    password: string
    measurementUnit: string
    exerciseWeightUnit: string
    userExcercises?: UserExerciseCreateNestedManyWithoutUserInput
    weightPrograms?: WeightProgramCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProtocolsInput = {
    id?: number
    email: string
    createdAt?: Date | string
    firstName?: string | null
    lastName?: string | null
    birthDate: Date | string
    gender: string
    weight: number
    height: number
    password: string
    measurementUnit: string
    exerciseWeightUnit: string
    userExcercises?: UserExerciseUncheckedCreateNestedManyWithoutUserInput
    weightPrograms?: WeightProgramUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProtocolsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProtocolsInput, UserUncheckedCreateWithoutProtocolsInput>
  }

  export type ProtocolDayCreateWithoutProtocolInput = {
    name: string
    order: number
    recurrent: boolean
    workouts?: WorkoutCreateNestedManyWithoutProtocolDayInput
    protocolDayUserExercises?: ProtocolDayUserExerciseCreateNestedManyWithoutProtocolDayInput
  }

  export type ProtocolDayUncheckedCreateWithoutProtocolInput = {
    id?: number
    name: string
    order: number
    recurrent: boolean
    workouts?: WorkoutUncheckedCreateNestedManyWithoutProtocolDayInput
    protocolDayUserExercises?: ProtocolDayUserExerciseUncheckedCreateNestedManyWithoutProtocolDayInput
  }

  export type ProtocolDayCreateOrConnectWithoutProtocolInput = {
    where: ProtocolDayWhereUniqueInput
    create: XOR<ProtocolDayCreateWithoutProtocolInput, ProtocolDayUncheckedCreateWithoutProtocolInput>
  }

  export type ProtocolDayCreateManyProtocolInputEnvelope = {
    data: ProtocolDayCreateManyProtocolInput | ProtocolDayCreateManyProtocolInput[]
  }

  export type UserUpsertWithoutProtocolsInput = {
    update: XOR<UserUpdateWithoutProtocolsInput, UserUncheckedUpdateWithoutProtocolsInput>
    create: XOR<UserCreateWithoutProtocolsInput, UserUncheckedCreateWithoutProtocolsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProtocolsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProtocolsInput, UserUncheckedUpdateWithoutProtocolsInput>
  }

  export type UserUpdateWithoutProtocolsInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    measurementUnit?: StringFieldUpdateOperationsInput | string
    exerciseWeightUnit?: StringFieldUpdateOperationsInput | string
    userExcercises?: UserExerciseUpdateManyWithoutUserNestedInput
    weightPrograms?: WeightProgramUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProtocolsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    measurementUnit?: StringFieldUpdateOperationsInput | string
    exerciseWeightUnit?: StringFieldUpdateOperationsInput | string
    userExcercises?: UserExerciseUncheckedUpdateManyWithoutUserNestedInput
    weightPrograms?: WeightProgramUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProtocolDayUpsertWithWhereUniqueWithoutProtocolInput = {
    where: ProtocolDayWhereUniqueInput
    update: XOR<ProtocolDayUpdateWithoutProtocolInput, ProtocolDayUncheckedUpdateWithoutProtocolInput>
    create: XOR<ProtocolDayCreateWithoutProtocolInput, ProtocolDayUncheckedCreateWithoutProtocolInput>
  }

  export type ProtocolDayUpdateWithWhereUniqueWithoutProtocolInput = {
    where: ProtocolDayWhereUniqueInput
    data: XOR<ProtocolDayUpdateWithoutProtocolInput, ProtocolDayUncheckedUpdateWithoutProtocolInput>
  }

  export type ProtocolDayUpdateManyWithWhereWithoutProtocolInput = {
    where: ProtocolDayScalarWhereInput
    data: XOR<ProtocolDayUpdateManyMutationInput, ProtocolDayUncheckedUpdateManyWithoutProtocolInput>
  }

  export type ProtocolDayScalarWhereInput = {
    AND?: ProtocolDayScalarWhereInput | ProtocolDayScalarWhereInput[]
    OR?: ProtocolDayScalarWhereInput[]
    NOT?: ProtocolDayScalarWhereInput | ProtocolDayScalarWhereInput[]
    id?: IntFilter<"ProtocolDay"> | number
    name?: StringFilter<"ProtocolDay"> | string
    order?: IntFilter<"ProtocolDay"> | number
    recurrent?: BoolFilter<"ProtocolDay"> | boolean
    protocolId?: IntFilter<"ProtocolDay"> | number
  }

  export type ProtocolCreateWithoutProtocolDaysInput = {
    name: string
    createdAt?: Date | string
    startedAt?: Date | string
    active: boolean
    user: UserCreateNestedOneWithoutProtocolsInput
  }

  export type ProtocolUncheckedCreateWithoutProtocolDaysInput = {
    id?: number
    name: string
    createdAt?: Date | string
    startedAt?: Date | string
    active: boolean
    userId: number
  }

  export type ProtocolCreateOrConnectWithoutProtocolDaysInput = {
    where: ProtocolWhereUniqueInput
    create: XOR<ProtocolCreateWithoutProtocolDaysInput, ProtocolUncheckedCreateWithoutProtocolDaysInput>
  }

  export type WorkoutCreateWithoutProtocolDayInput = {
    startTime?: Date | string
    endTime: Date | string
    exerciseRecords?: ExerciseRecordCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateWithoutProtocolDayInput = {
    id?: number
    startTime?: Date | string
    endTime: Date | string
    exerciseRecords?: ExerciseRecordUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutCreateOrConnectWithoutProtocolDayInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutProtocolDayInput, WorkoutUncheckedCreateWithoutProtocolDayInput>
  }

  export type WorkoutCreateManyProtocolDayInputEnvelope = {
    data: WorkoutCreateManyProtocolDayInput | WorkoutCreateManyProtocolDayInput[]
  }

  export type ProtocolDayUserExerciseCreateWithoutProtocolDayInput = {
    userExercise: UserExerciseCreateNestedOneWithoutProtocolDayUserExercisesInput
  }

  export type ProtocolDayUserExerciseUncheckedCreateWithoutProtocolDayInput = {
    id?: number
    userExerciseId: number
  }

  export type ProtocolDayUserExerciseCreateOrConnectWithoutProtocolDayInput = {
    where: ProtocolDayUserExerciseWhereUniqueInput
    create: XOR<ProtocolDayUserExerciseCreateWithoutProtocolDayInput, ProtocolDayUserExerciseUncheckedCreateWithoutProtocolDayInput>
  }

  export type ProtocolDayUserExerciseCreateManyProtocolDayInputEnvelope = {
    data: ProtocolDayUserExerciseCreateManyProtocolDayInput | ProtocolDayUserExerciseCreateManyProtocolDayInput[]
  }

  export type ProtocolUpsertWithoutProtocolDaysInput = {
    update: XOR<ProtocolUpdateWithoutProtocolDaysInput, ProtocolUncheckedUpdateWithoutProtocolDaysInput>
    create: XOR<ProtocolCreateWithoutProtocolDaysInput, ProtocolUncheckedCreateWithoutProtocolDaysInput>
    where?: ProtocolWhereInput
  }

  export type ProtocolUpdateToOneWithWhereWithoutProtocolDaysInput = {
    where?: ProtocolWhereInput
    data: XOR<ProtocolUpdateWithoutProtocolDaysInput, ProtocolUncheckedUpdateWithoutProtocolDaysInput>
  }

  export type ProtocolUpdateWithoutProtocolDaysInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutProtocolsNestedInput
  }

  export type ProtocolUncheckedUpdateWithoutProtocolDaysInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutUpsertWithWhereUniqueWithoutProtocolDayInput = {
    where: WorkoutWhereUniqueInput
    update: XOR<WorkoutUpdateWithoutProtocolDayInput, WorkoutUncheckedUpdateWithoutProtocolDayInput>
    create: XOR<WorkoutCreateWithoutProtocolDayInput, WorkoutUncheckedCreateWithoutProtocolDayInput>
  }

  export type WorkoutUpdateWithWhereUniqueWithoutProtocolDayInput = {
    where: WorkoutWhereUniqueInput
    data: XOR<WorkoutUpdateWithoutProtocolDayInput, WorkoutUncheckedUpdateWithoutProtocolDayInput>
  }

  export type WorkoutUpdateManyWithWhereWithoutProtocolDayInput = {
    where: WorkoutScalarWhereInput
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyWithoutProtocolDayInput>
  }

  export type WorkoutScalarWhereInput = {
    AND?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    OR?: WorkoutScalarWhereInput[]
    NOT?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    id?: IntFilter<"Workout"> | number
    startTime?: DateTimeFilter<"Workout"> | Date | string
    endTime?: DateTimeFilter<"Workout"> | Date | string
    protocolDayId?: IntFilter<"Workout"> | number
  }

  export type ProtocolDayUserExerciseUpsertWithWhereUniqueWithoutProtocolDayInput = {
    where: ProtocolDayUserExerciseWhereUniqueInput
    update: XOR<ProtocolDayUserExerciseUpdateWithoutProtocolDayInput, ProtocolDayUserExerciseUncheckedUpdateWithoutProtocolDayInput>
    create: XOR<ProtocolDayUserExerciseCreateWithoutProtocolDayInput, ProtocolDayUserExerciseUncheckedCreateWithoutProtocolDayInput>
  }

  export type ProtocolDayUserExerciseUpdateWithWhereUniqueWithoutProtocolDayInput = {
    where: ProtocolDayUserExerciseWhereUniqueInput
    data: XOR<ProtocolDayUserExerciseUpdateWithoutProtocolDayInput, ProtocolDayUserExerciseUncheckedUpdateWithoutProtocolDayInput>
  }

  export type ProtocolDayUserExerciseUpdateManyWithWhereWithoutProtocolDayInput = {
    where: ProtocolDayUserExerciseScalarWhereInput
    data: XOR<ProtocolDayUserExerciseUpdateManyMutationInput, ProtocolDayUserExerciseUncheckedUpdateManyWithoutProtocolDayInput>
  }

  export type ProtocolDayCreateWithoutWorkoutsInput = {
    name: string
    order: number
    recurrent: boolean
    protocol: ProtocolCreateNestedOneWithoutProtocolDaysInput
    protocolDayUserExercises?: ProtocolDayUserExerciseCreateNestedManyWithoutProtocolDayInput
  }

  export type ProtocolDayUncheckedCreateWithoutWorkoutsInput = {
    id?: number
    name: string
    order: number
    recurrent: boolean
    protocolId: number
    protocolDayUserExercises?: ProtocolDayUserExerciseUncheckedCreateNestedManyWithoutProtocolDayInput
  }

  export type ProtocolDayCreateOrConnectWithoutWorkoutsInput = {
    where: ProtocolDayWhereUniqueInput
    create: XOR<ProtocolDayCreateWithoutWorkoutsInput, ProtocolDayUncheckedCreateWithoutWorkoutsInput>
  }

  export type ExerciseRecordCreateWithoutWorkoutInput = {
    reps: number
    set: number
    weight: number
    userExercise: UserExerciseCreateNestedOneWithoutExerciseRecordsInput
  }

  export type ExerciseRecordUncheckedCreateWithoutWorkoutInput = {
    id?: number
    reps: number
    set: number
    weight: number
    userExerciseId: number
  }

  export type ExerciseRecordCreateOrConnectWithoutWorkoutInput = {
    where: ExerciseRecordWhereUniqueInput
    create: XOR<ExerciseRecordCreateWithoutWorkoutInput, ExerciseRecordUncheckedCreateWithoutWorkoutInput>
  }

  export type ExerciseRecordCreateManyWorkoutInputEnvelope = {
    data: ExerciseRecordCreateManyWorkoutInput | ExerciseRecordCreateManyWorkoutInput[]
  }

  export type ProtocolDayUpsertWithoutWorkoutsInput = {
    update: XOR<ProtocolDayUpdateWithoutWorkoutsInput, ProtocolDayUncheckedUpdateWithoutWorkoutsInput>
    create: XOR<ProtocolDayCreateWithoutWorkoutsInput, ProtocolDayUncheckedCreateWithoutWorkoutsInput>
    where?: ProtocolDayWhereInput
  }

  export type ProtocolDayUpdateToOneWithWhereWithoutWorkoutsInput = {
    where?: ProtocolDayWhereInput
    data: XOR<ProtocolDayUpdateWithoutWorkoutsInput, ProtocolDayUncheckedUpdateWithoutWorkoutsInput>
  }

  export type ProtocolDayUpdateWithoutWorkoutsInput = {
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    recurrent?: BoolFieldUpdateOperationsInput | boolean
    protocol?: ProtocolUpdateOneRequiredWithoutProtocolDaysNestedInput
    protocolDayUserExercises?: ProtocolDayUserExerciseUpdateManyWithoutProtocolDayNestedInput
  }

  export type ProtocolDayUncheckedUpdateWithoutWorkoutsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    recurrent?: BoolFieldUpdateOperationsInput | boolean
    protocolId?: IntFieldUpdateOperationsInput | number
    protocolDayUserExercises?: ProtocolDayUserExerciseUncheckedUpdateManyWithoutProtocolDayNestedInput
  }

  export type ExerciseRecordUpsertWithWhereUniqueWithoutWorkoutInput = {
    where: ExerciseRecordWhereUniqueInput
    update: XOR<ExerciseRecordUpdateWithoutWorkoutInput, ExerciseRecordUncheckedUpdateWithoutWorkoutInput>
    create: XOR<ExerciseRecordCreateWithoutWorkoutInput, ExerciseRecordUncheckedCreateWithoutWorkoutInput>
  }

  export type ExerciseRecordUpdateWithWhereUniqueWithoutWorkoutInput = {
    where: ExerciseRecordWhereUniqueInput
    data: XOR<ExerciseRecordUpdateWithoutWorkoutInput, ExerciseRecordUncheckedUpdateWithoutWorkoutInput>
  }

  export type ExerciseRecordUpdateManyWithWhereWithoutWorkoutInput = {
    where: ExerciseRecordScalarWhereInput
    data: XOR<ExerciseRecordUpdateManyMutationInput, ExerciseRecordUncheckedUpdateManyWithoutWorkoutInput>
  }

  export type WorkoutCreateWithoutExerciseRecordsInput = {
    startTime?: Date | string
    endTime: Date | string
    protocolDay: ProtocolDayCreateNestedOneWithoutWorkoutsInput
  }

  export type WorkoutUncheckedCreateWithoutExerciseRecordsInput = {
    id?: number
    startTime?: Date | string
    endTime: Date | string
    protocolDayId: number
  }

  export type WorkoutCreateOrConnectWithoutExerciseRecordsInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutExerciseRecordsInput, WorkoutUncheckedCreateWithoutExerciseRecordsInput>
  }

  export type UserExerciseCreateWithoutExerciseRecordsInput = {
    currSets: number
    currReps: number
    currWeight: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserExcercisesInput
    exercise: ExerciseCreateNestedOneWithoutUserExcercisesInput
    protocolDayUserExercises?: ProtocolDayUserExerciseCreateNestedManyWithoutUserExerciseInput
  }

  export type UserExerciseUncheckedCreateWithoutExerciseRecordsInput = {
    id?: number
    userId: number
    currSets: number
    currReps: number
    currWeight: number
    exerciseId: number
    createdAt?: Date | string
    protocolDayUserExercises?: ProtocolDayUserExerciseUncheckedCreateNestedManyWithoutUserExerciseInput
  }

  export type UserExerciseCreateOrConnectWithoutExerciseRecordsInput = {
    where: UserExerciseWhereUniqueInput
    create: XOR<UserExerciseCreateWithoutExerciseRecordsInput, UserExerciseUncheckedCreateWithoutExerciseRecordsInput>
  }

  export type WorkoutUpsertWithoutExerciseRecordsInput = {
    update: XOR<WorkoutUpdateWithoutExerciseRecordsInput, WorkoutUncheckedUpdateWithoutExerciseRecordsInput>
    create: XOR<WorkoutCreateWithoutExerciseRecordsInput, WorkoutUncheckedCreateWithoutExerciseRecordsInput>
    where?: WorkoutWhereInput
  }

  export type WorkoutUpdateToOneWithWhereWithoutExerciseRecordsInput = {
    where?: WorkoutWhereInput
    data: XOR<WorkoutUpdateWithoutExerciseRecordsInput, WorkoutUncheckedUpdateWithoutExerciseRecordsInput>
  }

  export type WorkoutUpdateWithoutExerciseRecordsInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    protocolDay?: ProtocolDayUpdateOneRequiredWithoutWorkoutsNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutExerciseRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    protocolDayId?: IntFieldUpdateOperationsInput | number
  }

  export type UserExerciseUpsertWithoutExerciseRecordsInput = {
    update: XOR<UserExerciseUpdateWithoutExerciseRecordsInput, UserExerciseUncheckedUpdateWithoutExerciseRecordsInput>
    create: XOR<UserExerciseCreateWithoutExerciseRecordsInput, UserExerciseUncheckedCreateWithoutExerciseRecordsInput>
    where?: UserExerciseWhereInput
  }

  export type UserExerciseUpdateToOneWithWhereWithoutExerciseRecordsInput = {
    where?: UserExerciseWhereInput
    data: XOR<UserExerciseUpdateWithoutExerciseRecordsInput, UserExerciseUncheckedUpdateWithoutExerciseRecordsInput>
  }

  export type UserExerciseUpdateWithoutExerciseRecordsInput = {
    currSets?: IntFieldUpdateOperationsInput | number
    currReps?: IntFieldUpdateOperationsInput | number
    currWeight?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserExcercisesNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutUserExcercisesNestedInput
    protocolDayUserExercises?: ProtocolDayUserExerciseUpdateManyWithoutUserExerciseNestedInput
  }

  export type UserExerciseUncheckedUpdateWithoutExerciseRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    currSets?: IntFieldUpdateOperationsInput | number
    currReps?: IntFieldUpdateOperationsInput | number
    currWeight?: FloatFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    protocolDayUserExercises?: ProtocolDayUserExerciseUncheckedUpdateManyWithoutUserExerciseNestedInput
  }

  export type UserExerciseCreateWithoutProtocolDayUserExercisesInput = {
    currSets: number
    currReps: number
    currWeight: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserExcercisesInput
    exercise: ExerciseCreateNestedOneWithoutUserExcercisesInput
    exerciseRecords?: ExerciseRecordCreateNestedManyWithoutUserExerciseInput
  }

  export type UserExerciseUncheckedCreateWithoutProtocolDayUserExercisesInput = {
    id?: number
    userId: number
    currSets: number
    currReps: number
    currWeight: number
    exerciseId: number
    createdAt?: Date | string
    exerciseRecords?: ExerciseRecordUncheckedCreateNestedManyWithoutUserExerciseInput
  }

  export type UserExerciseCreateOrConnectWithoutProtocolDayUserExercisesInput = {
    where: UserExerciseWhereUniqueInput
    create: XOR<UserExerciseCreateWithoutProtocolDayUserExercisesInput, UserExerciseUncheckedCreateWithoutProtocolDayUserExercisesInput>
  }

  export type ProtocolDayCreateWithoutProtocolDayUserExercisesInput = {
    name: string
    order: number
    recurrent: boolean
    protocol: ProtocolCreateNestedOneWithoutProtocolDaysInput
    workouts?: WorkoutCreateNestedManyWithoutProtocolDayInput
  }

  export type ProtocolDayUncheckedCreateWithoutProtocolDayUserExercisesInput = {
    id?: number
    name: string
    order: number
    recurrent: boolean
    protocolId: number
    workouts?: WorkoutUncheckedCreateNestedManyWithoutProtocolDayInput
  }

  export type ProtocolDayCreateOrConnectWithoutProtocolDayUserExercisesInput = {
    where: ProtocolDayWhereUniqueInput
    create: XOR<ProtocolDayCreateWithoutProtocolDayUserExercisesInput, ProtocolDayUncheckedCreateWithoutProtocolDayUserExercisesInput>
  }

  export type UserExerciseUpsertWithoutProtocolDayUserExercisesInput = {
    update: XOR<UserExerciseUpdateWithoutProtocolDayUserExercisesInput, UserExerciseUncheckedUpdateWithoutProtocolDayUserExercisesInput>
    create: XOR<UserExerciseCreateWithoutProtocolDayUserExercisesInput, UserExerciseUncheckedCreateWithoutProtocolDayUserExercisesInput>
    where?: UserExerciseWhereInput
  }

  export type UserExerciseUpdateToOneWithWhereWithoutProtocolDayUserExercisesInput = {
    where?: UserExerciseWhereInput
    data: XOR<UserExerciseUpdateWithoutProtocolDayUserExercisesInput, UserExerciseUncheckedUpdateWithoutProtocolDayUserExercisesInput>
  }

  export type UserExerciseUpdateWithoutProtocolDayUserExercisesInput = {
    currSets?: IntFieldUpdateOperationsInput | number
    currReps?: IntFieldUpdateOperationsInput | number
    currWeight?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserExcercisesNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutUserExcercisesNestedInput
    exerciseRecords?: ExerciseRecordUpdateManyWithoutUserExerciseNestedInput
  }

  export type UserExerciseUncheckedUpdateWithoutProtocolDayUserExercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    currSets?: IntFieldUpdateOperationsInput | number
    currReps?: IntFieldUpdateOperationsInput | number
    currWeight?: FloatFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exerciseRecords?: ExerciseRecordUncheckedUpdateManyWithoutUserExerciseNestedInput
  }

  export type ProtocolDayUpsertWithoutProtocolDayUserExercisesInput = {
    update: XOR<ProtocolDayUpdateWithoutProtocolDayUserExercisesInput, ProtocolDayUncheckedUpdateWithoutProtocolDayUserExercisesInput>
    create: XOR<ProtocolDayCreateWithoutProtocolDayUserExercisesInput, ProtocolDayUncheckedCreateWithoutProtocolDayUserExercisesInput>
    where?: ProtocolDayWhereInput
  }

  export type ProtocolDayUpdateToOneWithWhereWithoutProtocolDayUserExercisesInput = {
    where?: ProtocolDayWhereInput
    data: XOR<ProtocolDayUpdateWithoutProtocolDayUserExercisesInput, ProtocolDayUncheckedUpdateWithoutProtocolDayUserExercisesInput>
  }

  export type ProtocolDayUpdateWithoutProtocolDayUserExercisesInput = {
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    recurrent?: BoolFieldUpdateOperationsInput | boolean
    protocol?: ProtocolUpdateOneRequiredWithoutProtocolDaysNestedInput
    workouts?: WorkoutUpdateManyWithoutProtocolDayNestedInput
  }

  export type ProtocolDayUncheckedUpdateWithoutProtocolDayUserExercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    recurrent?: BoolFieldUpdateOperationsInput | boolean
    protocolId?: IntFieldUpdateOperationsInput | number
    workouts?: WorkoutUncheckedUpdateManyWithoutProtocolDayNestedInput
  }

  export type WeightProgramCreateWithoutWeightRecordsInput = {
    createdAt?: Date | string
    active: boolean
    goalWeight: number
    mode: string
    user: UserCreateNestedOneWithoutWeightProgramsInput
  }

  export type WeightProgramUncheckedCreateWithoutWeightRecordsInput = {
    id?: number
    createdAt?: Date | string
    active: boolean
    goalWeight: number
    mode: string
    userId: number
  }

  export type WeightProgramCreateOrConnectWithoutWeightRecordsInput = {
    where: WeightProgramWhereUniqueInput
    create: XOR<WeightProgramCreateWithoutWeightRecordsInput, WeightProgramUncheckedCreateWithoutWeightRecordsInput>
  }

  export type WeightProgramUpsertWithoutWeightRecordsInput = {
    update: XOR<WeightProgramUpdateWithoutWeightRecordsInput, WeightProgramUncheckedUpdateWithoutWeightRecordsInput>
    create: XOR<WeightProgramCreateWithoutWeightRecordsInput, WeightProgramUncheckedCreateWithoutWeightRecordsInput>
    where?: WeightProgramWhereInput
  }

  export type WeightProgramUpdateToOneWithWhereWithoutWeightRecordsInput = {
    where?: WeightProgramWhereInput
    data: XOR<WeightProgramUpdateWithoutWeightRecordsInput, WeightProgramUncheckedUpdateWithoutWeightRecordsInput>
  }

  export type WeightProgramUpdateWithoutWeightRecordsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    goalWeight?: FloatFieldUpdateOperationsInput | number
    mode?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWeightProgramsNestedInput
  }

  export type WeightProgramUncheckedUpdateWithoutWeightRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    goalWeight?: FloatFieldUpdateOperationsInput | number
    mode?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutWeightProgramsInput = {
    email: string
    createdAt?: Date | string
    firstName?: string | null
    lastName?: string | null
    birthDate: Date | string
    gender: string
    weight: number
    height: number
    password: string
    measurementUnit: string
    exerciseWeightUnit: string
    userExcercises?: UserExerciseCreateNestedManyWithoutUserInput
    protocols?: ProtocolCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWeightProgramsInput = {
    id?: number
    email: string
    createdAt?: Date | string
    firstName?: string | null
    lastName?: string | null
    birthDate: Date | string
    gender: string
    weight: number
    height: number
    password: string
    measurementUnit: string
    exerciseWeightUnit: string
    userExcercises?: UserExerciseUncheckedCreateNestedManyWithoutUserInput
    protocols?: ProtocolUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWeightProgramsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWeightProgramsInput, UserUncheckedCreateWithoutWeightProgramsInput>
  }

  export type WeightRecordCreateWithoutWeightProgramInput = {
    createdAt?: Date | string
    value: number
    smooth: number
  }

  export type WeightRecordUncheckedCreateWithoutWeightProgramInput = {
    id?: number
    createdAt?: Date | string
    value: number
    smooth: number
  }

  export type WeightRecordCreateOrConnectWithoutWeightProgramInput = {
    where: WeightRecordWhereUniqueInput
    create: XOR<WeightRecordCreateWithoutWeightProgramInput, WeightRecordUncheckedCreateWithoutWeightProgramInput>
  }

  export type WeightRecordCreateManyWeightProgramInputEnvelope = {
    data: WeightRecordCreateManyWeightProgramInput | WeightRecordCreateManyWeightProgramInput[]
  }

  export type UserUpsertWithoutWeightProgramsInput = {
    update: XOR<UserUpdateWithoutWeightProgramsInput, UserUncheckedUpdateWithoutWeightProgramsInput>
    create: XOR<UserCreateWithoutWeightProgramsInput, UserUncheckedCreateWithoutWeightProgramsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWeightProgramsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWeightProgramsInput, UserUncheckedUpdateWithoutWeightProgramsInput>
  }

  export type UserUpdateWithoutWeightProgramsInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    measurementUnit?: StringFieldUpdateOperationsInput | string
    exerciseWeightUnit?: StringFieldUpdateOperationsInput | string
    userExcercises?: UserExerciseUpdateManyWithoutUserNestedInput
    protocols?: ProtocolUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWeightProgramsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    measurementUnit?: StringFieldUpdateOperationsInput | string
    exerciseWeightUnit?: StringFieldUpdateOperationsInput | string
    userExcercises?: UserExerciseUncheckedUpdateManyWithoutUserNestedInput
    protocols?: ProtocolUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WeightRecordUpsertWithWhereUniqueWithoutWeightProgramInput = {
    where: WeightRecordWhereUniqueInput
    update: XOR<WeightRecordUpdateWithoutWeightProgramInput, WeightRecordUncheckedUpdateWithoutWeightProgramInput>
    create: XOR<WeightRecordCreateWithoutWeightProgramInput, WeightRecordUncheckedCreateWithoutWeightProgramInput>
  }

  export type WeightRecordUpdateWithWhereUniqueWithoutWeightProgramInput = {
    where: WeightRecordWhereUniqueInput
    data: XOR<WeightRecordUpdateWithoutWeightProgramInput, WeightRecordUncheckedUpdateWithoutWeightProgramInput>
  }

  export type WeightRecordUpdateManyWithWhereWithoutWeightProgramInput = {
    where: WeightRecordScalarWhereInput
    data: XOR<WeightRecordUpdateManyMutationInput, WeightRecordUncheckedUpdateManyWithoutWeightProgramInput>
  }

  export type WeightRecordScalarWhereInput = {
    AND?: WeightRecordScalarWhereInput | WeightRecordScalarWhereInput[]
    OR?: WeightRecordScalarWhereInput[]
    NOT?: WeightRecordScalarWhereInput | WeightRecordScalarWhereInput[]
    id?: IntFilter<"WeightRecord"> | number
    createdAt?: DateTimeFilter<"WeightRecord"> | Date | string
    value?: FloatFilter<"WeightRecord"> | number
    smooth?: FloatFilter<"WeightRecord"> | number
    weightProgramId?: IntFilter<"WeightRecord"> | number
  }

  export type UserExerciseCreateManyUserInput = {
    id?: number
    currSets: number
    currReps: number
    currWeight: number
    exerciseId: number
    createdAt?: Date | string
  }

  export type ProtocolCreateManyUserInput = {
    id?: number
    name: string
    createdAt?: Date | string
    startedAt?: Date | string
    active: boolean
  }

  export type WeightProgramCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    active: boolean
    goalWeight: number
    mode: string
  }

  export type UserExerciseUpdateWithoutUserInput = {
    currSets?: IntFieldUpdateOperationsInput | number
    currReps?: IntFieldUpdateOperationsInput | number
    currWeight?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercise?: ExerciseUpdateOneRequiredWithoutUserExcercisesNestedInput
    exerciseRecords?: ExerciseRecordUpdateManyWithoutUserExerciseNestedInput
    protocolDayUserExercises?: ProtocolDayUserExerciseUpdateManyWithoutUserExerciseNestedInput
  }

  export type UserExerciseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    currSets?: IntFieldUpdateOperationsInput | number
    currReps?: IntFieldUpdateOperationsInput | number
    currWeight?: FloatFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exerciseRecords?: ExerciseRecordUncheckedUpdateManyWithoutUserExerciseNestedInput
    protocolDayUserExercises?: ProtocolDayUserExerciseUncheckedUpdateManyWithoutUserExerciseNestedInput
  }

  export type UserExerciseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    currSets?: IntFieldUpdateOperationsInput | number
    currReps?: IntFieldUpdateOperationsInput | number
    currWeight?: FloatFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProtocolUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    protocolDays?: ProtocolDayUpdateManyWithoutProtocolNestedInput
  }

  export type ProtocolUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    protocolDays?: ProtocolDayUncheckedUpdateManyWithoutProtocolNestedInput
  }

  export type ProtocolUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WeightProgramUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    goalWeight?: FloatFieldUpdateOperationsInput | number
    mode?: StringFieldUpdateOperationsInput | string
    weightRecords?: WeightRecordUpdateManyWithoutWeightProgramNestedInput
  }

  export type WeightProgramUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    goalWeight?: FloatFieldUpdateOperationsInput | number
    mode?: StringFieldUpdateOperationsInput | string
    weightRecords?: WeightRecordUncheckedUpdateManyWithoutWeightProgramNestedInput
  }

  export type WeightProgramUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    goalWeight?: FloatFieldUpdateOperationsInput | number
    mode?: StringFieldUpdateOperationsInput | string
  }

  export type UserExerciseCreateManyExerciseInput = {
    id?: number
    userId: number
    currSets: number
    currReps: number
    currWeight: number
    createdAt?: Date | string
  }

  export type UserExerciseUpdateWithoutExerciseInput = {
    currSets?: IntFieldUpdateOperationsInput | number
    currReps?: IntFieldUpdateOperationsInput | number
    currWeight?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserExcercisesNestedInput
    exerciseRecords?: ExerciseRecordUpdateManyWithoutUserExerciseNestedInput
    protocolDayUserExercises?: ProtocolDayUserExerciseUpdateManyWithoutUserExerciseNestedInput
  }

  export type UserExerciseUncheckedUpdateWithoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    currSets?: IntFieldUpdateOperationsInput | number
    currReps?: IntFieldUpdateOperationsInput | number
    currWeight?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exerciseRecords?: ExerciseRecordUncheckedUpdateManyWithoutUserExerciseNestedInput
    protocolDayUserExercises?: ProtocolDayUserExerciseUncheckedUpdateManyWithoutUserExerciseNestedInput
  }

  export type UserExerciseUncheckedUpdateManyWithoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    currSets?: IntFieldUpdateOperationsInput | number
    currReps?: IntFieldUpdateOperationsInput | number
    currWeight?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseRecordCreateManyUserExerciseInput = {
    id?: number
    reps: number
    set: number
    weight: number
    workoutId: number
  }

  export type ProtocolDayUserExerciseCreateManyUserExerciseInput = {
    id?: number
    protocolDayId: number
  }

  export type ExerciseRecordUpdateWithoutUserExerciseInput = {
    reps?: IntFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    workout?: WorkoutUpdateOneRequiredWithoutExerciseRecordsNestedInput
  }

  export type ExerciseRecordUncheckedUpdateWithoutUserExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
  }

  export type ExerciseRecordUncheckedUpdateManyWithoutUserExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
  }

  export type ProtocolDayUserExerciseUpdateWithoutUserExerciseInput = {
    protocolDay?: ProtocolDayUpdateOneRequiredWithoutProtocolDayUserExercisesNestedInput
  }

  export type ProtocolDayUserExerciseUncheckedUpdateWithoutUserExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    protocolDayId?: IntFieldUpdateOperationsInput | number
  }

  export type ProtocolDayUserExerciseUncheckedUpdateManyWithoutUserExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    protocolDayId?: IntFieldUpdateOperationsInput | number
  }

  export type ProtocolDayCreateManyProtocolInput = {
    id?: number
    name: string
    order: number
    recurrent: boolean
  }

  export type ProtocolDayUpdateWithoutProtocolInput = {
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    recurrent?: BoolFieldUpdateOperationsInput | boolean
    workouts?: WorkoutUpdateManyWithoutProtocolDayNestedInput
    protocolDayUserExercises?: ProtocolDayUserExerciseUpdateManyWithoutProtocolDayNestedInput
  }

  export type ProtocolDayUncheckedUpdateWithoutProtocolInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    recurrent?: BoolFieldUpdateOperationsInput | boolean
    workouts?: WorkoutUncheckedUpdateManyWithoutProtocolDayNestedInput
    protocolDayUserExercises?: ProtocolDayUserExerciseUncheckedUpdateManyWithoutProtocolDayNestedInput
  }

  export type ProtocolDayUncheckedUpdateManyWithoutProtocolInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    recurrent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorkoutCreateManyProtocolDayInput = {
    id?: number
    startTime?: Date | string
    endTime: Date | string
  }

  export type ProtocolDayUserExerciseCreateManyProtocolDayInput = {
    id?: number
    userExerciseId: number
  }

  export type WorkoutUpdateWithoutProtocolDayInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    exerciseRecords?: ExerciseRecordUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutProtocolDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    exerciseRecords?: ExerciseRecordUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateManyWithoutProtocolDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProtocolDayUserExerciseUpdateWithoutProtocolDayInput = {
    userExercise?: UserExerciseUpdateOneRequiredWithoutProtocolDayUserExercisesNestedInput
  }

  export type ProtocolDayUserExerciseUncheckedUpdateWithoutProtocolDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    userExerciseId?: IntFieldUpdateOperationsInput | number
  }

  export type ProtocolDayUserExerciseUncheckedUpdateManyWithoutProtocolDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    userExerciseId?: IntFieldUpdateOperationsInput | number
  }

  export type ExerciseRecordCreateManyWorkoutInput = {
    id?: number
    reps: number
    set: number
    weight: number
    userExerciseId: number
  }

  export type ExerciseRecordUpdateWithoutWorkoutInput = {
    reps?: IntFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    userExercise?: UserExerciseUpdateOneRequiredWithoutExerciseRecordsNestedInput
  }

  export type ExerciseRecordUncheckedUpdateWithoutWorkoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    userExerciseId?: IntFieldUpdateOperationsInput | number
  }

  export type ExerciseRecordUncheckedUpdateManyWithoutWorkoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    userExerciseId?: IntFieldUpdateOperationsInput | number
  }

  export type WeightRecordCreateManyWeightProgramInput = {
    id?: number
    createdAt?: Date | string
    value: number
    smooth: number
  }

  export type WeightRecordUpdateWithoutWeightProgramInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    smooth?: FloatFieldUpdateOperationsInput | number
  }

  export type WeightRecordUncheckedUpdateWithoutWeightProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    smooth?: FloatFieldUpdateOperationsInput | number
  }

  export type WeightRecordUncheckedUpdateManyWithoutWeightProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    smooth?: FloatFieldUpdateOperationsInput | number
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
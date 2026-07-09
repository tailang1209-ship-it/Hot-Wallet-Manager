import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { ContactInput, ContactRecord, ContactUpdate, ErrorResponse, HealthStatus, ListTransactionsParams, TransactionInput, TransactionRecord } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListContactsUrl: () => string;
/**
 * @summary List all contacts
 */
export declare const listContacts: (options?: RequestInit) => Promise<ContactRecord[]>;
export declare const getListContactsQueryKey: () => readonly ["/api/contacts"];
export declare const getListContactsQueryOptions: <TData = Awaited<ReturnType<typeof listContacts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listContacts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listContacts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListContactsQueryResult = NonNullable<Awaited<ReturnType<typeof listContacts>>>;
export type ListContactsQueryError = ErrorType<unknown>;
/**
 * @summary List all contacts
 */
export declare function useListContacts<TData = Awaited<ReturnType<typeof listContacts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listContacts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateContactUrl: () => string;
/**
 * @summary Create a contact
 */
export declare const createContact: (contactInput: ContactInput, options?: RequestInit) => Promise<ContactRecord>;
export declare const getCreateContactMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createContact>>, TError, {
        data: BodyType<ContactInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createContact>>, TError, {
    data: BodyType<ContactInput>;
}, TContext>;
export type CreateContactMutationResult = NonNullable<Awaited<ReturnType<typeof createContact>>>;
export type CreateContactMutationBody = BodyType<ContactInput>;
export type CreateContactMutationError = ErrorType<ErrorResponse>;
/**
* @summary Create a contact
*/
export declare const useCreateContact: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createContact>>, TError, {
        data: BodyType<ContactInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createContact>>, TError, {
    data: BodyType<ContactInput>;
}, TContext>;
export declare const getGetContactUrl: (id: number) => string;
/**
 * @summary Get a contact by ID
 */
export declare const getContact: (id: number, options?: RequestInit) => Promise<ContactRecord>;
export declare const getGetContactQueryKey: (id: number) => readonly [`/api/contacts/${number}`];
export declare const getGetContactQueryOptions: <TData = Awaited<ReturnType<typeof getContact>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getContact>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getContact>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetContactQueryResult = NonNullable<Awaited<ReturnType<typeof getContact>>>;
export type GetContactQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get a contact by ID
 */
export declare function useGetContact<TData = Awaited<ReturnType<typeof getContact>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getContact>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateContactUrl: (id: number) => string;
/**
 * @summary Update a contact
 */
export declare const updateContact: (id: number, contactUpdate: ContactUpdate, options?: RequestInit) => Promise<ContactRecord>;
export declare const getUpdateContactMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateContact>>, TError, {
        id: number;
        data: BodyType<ContactUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateContact>>, TError, {
    id: number;
    data: BodyType<ContactUpdate>;
}, TContext>;
export type UpdateContactMutationResult = NonNullable<Awaited<ReturnType<typeof updateContact>>>;
export type UpdateContactMutationBody = BodyType<ContactUpdate>;
export type UpdateContactMutationError = ErrorType<ErrorResponse>;
/**
* @summary Update a contact
*/
export declare const useUpdateContact: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateContact>>, TError, {
        id: number;
        data: BodyType<ContactUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateContact>>, TError, {
    id: number;
    data: BodyType<ContactUpdate>;
}, TContext>;
export declare const getDeleteContactUrl: (id: number) => string;
/**
 * @summary Delete a contact
 */
export declare const deleteContact: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteContactMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteContact>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteContact>>, TError, {
    id: number;
}, TContext>;
export type DeleteContactMutationResult = NonNullable<Awaited<ReturnType<typeof deleteContact>>>;
export type DeleteContactMutationError = ErrorType<ErrorResponse>;
/**
* @summary Delete a contact
*/
export declare const useDeleteContact: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteContact>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteContact>>, TError, {
    id: number;
}, TContext>;
export declare const getListTransactionsUrl: (params?: ListTransactionsParams) => string;
/**
 * @summary List all transactions
 */
export declare const listTransactions: (params?: ListTransactionsParams, options?: RequestInit) => Promise<TransactionRecord[]>;
export declare const getListTransactionsQueryKey: (params?: ListTransactionsParams) => readonly ["/api/transactions", ...ListTransactionsParams[]];
export declare const getListTransactionsQueryOptions: <TData = Awaited<ReturnType<typeof listTransactions>>, TError = ErrorType<unknown>>(params?: ListTransactionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listTransactions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListTransactionsQueryResult = NonNullable<Awaited<ReturnType<typeof listTransactions>>>;
export type ListTransactionsQueryError = ErrorType<unknown>;
/**
 * @summary List all transactions
 */
export declare function useListTransactions<TData = Awaited<ReturnType<typeof listTransactions>>, TError = ErrorType<unknown>>(params?: ListTransactionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateTransactionUrl: () => string;
/**
 * @summary Create a transaction
 */
export declare const createTransaction: (transactionInput: TransactionInput, options?: RequestInit) => Promise<TransactionRecord>;
export declare const getCreateTransactionMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createTransaction>>, TError, {
        data: BodyType<TransactionInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createTransaction>>, TError, {
    data: BodyType<TransactionInput>;
}, TContext>;
export type CreateTransactionMutationResult = NonNullable<Awaited<ReturnType<typeof createTransaction>>>;
export type CreateTransactionMutationBody = BodyType<TransactionInput>;
export type CreateTransactionMutationError = ErrorType<ErrorResponse>;
/**
* @summary Create a transaction
*/
export declare const useCreateTransaction: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createTransaction>>, TError, {
        data: BodyType<TransactionInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createTransaction>>, TError, {
    data: BodyType<TransactionInput>;
}, TContext>;
export declare const getGetTransactionUrl: (id: string) => string;
/**
 * @summary Get a transaction by app ID
 */
export declare const getTransaction: (id: string, options?: RequestInit) => Promise<TransactionRecord>;
export declare const getGetTransactionQueryKey: (id: string) => readonly [`/api/transactions/${string}`];
export declare const getGetTransactionQueryOptions: <TData = Awaited<ReturnType<typeof getTransaction>>, TError = ErrorType<ErrorResponse>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTransaction>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTransaction>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTransactionQueryResult = NonNullable<Awaited<ReturnType<typeof getTransaction>>>;
export type GetTransactionQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get a transaction by app ID
 */
export declare function useGetTransaction<TData = Awaited<ReturnType<typeof getTransaction>>, TError = ErrorType<ErrorResponse>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTransaction>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map
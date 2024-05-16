import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Academy = {
  __typename?: 'Academy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type AcademyCreateInput = {
  name: Scalars['String']['input'];
  owner: UserCreateNestedOneWithoutAcademyInput;
};

export type AcademyWhereUniqueInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Knowledge = {
  __typename?: 'Knowledge';
  academyId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type KnowledgeCreateInput = {
  academyId?: InputMaybe<Scalars['Int']['input']>;
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type KnowledgeWhereUniqueInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['Float']['input']>;
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  access_token: Scalars['String']['output'];
  expiresAt: Scalars['DateTime']['output'];
  user: User;
};

export type LoginUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAcademy: Academy;
  createKnowledge: Knowledge;
  createReview: Review;
  createTicket: Ticket;
  createUser: User;
  login: LoginOutput;
  signup: User;
};


export type MutationCreateAcademyArgs = {
  data: AcademyCreateInput;
};


export type MutationCreateKnowledgeArgs = {
  data: KnowledgeCreateInput;
};


export type MutationCreateReviewArgs = {
  data: ReviewCreateInput;
};


export type MutationCreateTicketArgs = {
  data: TicketCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationLoginArgs = {
  data: LoginUserInput;
};


export type MutationSignupArgs = {
  data: SignUpInput;
};

export type Query = {
  __typename?: 'Query';
  academy: Academy;
  knowledge: Knowledge;
  review: Review;
  ticket: Ticket;
  user: User;
};


export type QueryAcademyArgs = {
  where: AcademyWhereUniqueInput;
};


export type QueryKnowledgeArgs = {
  where: KnowledgeWhereUniqueInput;
};


export type QueryReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type QueryTicketArgs = {
  where: TicketWhereUniqueInput;
};

export type Review = {
  __typename?: 'Review';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<User>;
  ticket?: Maybe<Ticket>;
  ticketId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type ReviewCreateInput = {
  comment: Scalars['String']['input'];
  ticketId: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
};

export type ReviewWhereUniqueInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  uuid: Scalars['String']['input'];
};

export type SignUpInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Ticket = {
  __typename?: 'Ticket';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<User>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type TicketCreateInput = {
  description: Scalars['String']['input'];
  knowledgeId: Scalars['Float']['input'];
  title: Scalars['String']['input'];
  userId: Scalars['Float']['input'];
};

export type TicketWhereUniqueInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserCreateNestedOneWithoutAcademyInput = {
  connect: UserWhereUniqueInput;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id?: number | null, uuid?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null } };


export const UserDocument = gql`
    query user {
  user {
    id
    uuid
    email
    firstName
    lastName
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export function useUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserSuspenseQueryHookResult = ReturnType<typeof useUserSuspenseQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import Vue from 'vue';
import VueApollo from 'vue-apollo';

import GRAPHQL_URI from '@/shared/constants/config.constant';

Vue.use(VueApollo);

const httpLink = createHttpLink({
  uri: process.env.NODE_ENV === 'production' ? GRAPHQL_URI.prod : GRAPHQL_URI.dev,
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

export default apolloProvider;

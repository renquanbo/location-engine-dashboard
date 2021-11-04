/* eslint-disable react/display-name */
import { useRouter } from "next/router";
import * as React from 'react';
import storage from "../../lib/services/storage";

export default function withAuth<T> (WrappedComponent: React.ComponentType<T>) {
  return (props: T) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const Router = useRouter();

      const token = storage.token;

      // If there is no access token we redirect to "/" page.
      if (!token) {
        Router.replace("/login");
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  }
}
import { createContext, useState } from "react";
import type { UserModel } from "../models/user";

interface UserContextModel {
  user: UserModel | null | undefined;
  handleSetUser: (id: string, displayName: string, email: string) => void;
}

export const UserContext = createContext<UserContextModel>({
  user: {
    id: "",
    displayName: "",
    email: "",
  },
  handleSetUser: () => {},
});

export default function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserModel | null | undefined>(undefined);

  function handleSetUser(id: string, displayName: string, email: string) {
    setUser({ id, displayName, email });
  }

  const contextValue = {
    user,
    handleSetUser,
  };

  return <UserContext value={contextValue}>{children}</UserContext>;
}

import type { UserType } from "../types"

export function sortUsers(users: UserType[]): UserType[] {
  
  const dummyUsers: UserType[] = [...users];
  dummyUsers.sort((userA, userB) => {
    const loginA = userA.login.toLowerCase()
    const loginB = userB.login.toLowerCase()

    if (loginA < loginB) {
      return -1
    } else if (loginA > loginB) {
      return 1
    }
    return 0
  })

  return dummyUsers
}
// Fix for missing useActionState in React types with Next.js 16
declare module "react" {
  function useActionState<State, Payload>(
    action: (state: State, payload: Payload) => State | Promise<State>,
    initialState: State
  ): [State, (payload: Payload) => void]

  function useActionState<State, Payload>(
    action: (state: State, payload: Payload) => State | Promise<State>,
    initialState: State,
    permalink?: string
  ): [State, (payload: Payload) => void]
}

export {}

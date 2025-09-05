export type MutationProps<T> = {
  onSuccess?: (data: unknown) => void
  onError?: (err: T) => void
  onSettled?: () => void
  onMutate?: () => void
}

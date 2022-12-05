/** Custom class for immutable work with array */
export class immArr {
  /** Immutable inserts value in array
   * @return new array
   */
  static insert = (array: any[], index: number, value: any) => [
    ...array.slice(0, index),
    value,
    ...array.slice(index)
  ]

  /** Immutable remove value in array
   * @return new array
   */
  static remove = (array: any[], index: number) => [
    ...array.slice(0, index),
    ...array.slice(index + 1)
  ]

  /** Immutable replace element in array
   * @return new array
   */
  static replace = (array: any[], index: number, value: any) => [
    ...this.insert(this.remove(array, index), index, value)
  ]

  /** Immutable change positions for two values in array
   * @return new array
   */
  static swap = (
    array: any[],
    sourceIndex: number,
    destinationIndex: number,
    value: any
  ) => [
    ...this.insert(this.remove(array, sourceIndex), destinationIndex, value)
  ]
}

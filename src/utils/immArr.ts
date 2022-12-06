/** Custom class for immutable work with array */
export class immArr {
  /** Immutable inserts element into array
   * @return new array
   */
  static insert<Type>(array: Type[], index: number, element: Type): Type[] {
    return [...array.slice(0, index), element, ...array.slice(index)]
  }

  /** Immutable remove element from array
   * @return new array
   */
  static remove<Type>(array: Type[], index: number): Type[] {
    return [...array.slice(0, index), ...array.slice(index + 1)]
  }

  /** Immutable replace element in array
   * @return new array
   */
  static replace<Type>(array: Type[], index: number, element: Type): Type[] {
    return [...this.insert(this.remove(array, index), index, element)]
  }

  /** Immutable change positions for two elements in array
   * @return new array
   */
  static swap<Type>(
    array: Type[],
    sourceIndex: number,
    destinationIndex: number,
    element: Type
  ): Type[] {
    return [
      ...this.insert(this.remove(array, sourceIndex), destinationIndex, element)
    ]
  }
}

/*
* @example
* list = [1, 7, 2, 3, 4, 7, 8, 9, 1, 4, 0];
* merge(list) // [ 0, 1, 1, 2, 3, 4, 4, 7, 7, 8, 9 ]
*/

export const merge = (arr: number[]): number[] => {
    if (!arr || !arr.length) {
        throw 'The array does not meet the requirements';
    }
    if (arr.length === 1) {
        return arr
    }
    const mergeSort = (left: number[], right: number[]): number[] => {
        const arrSort = [];
        let i = 0;
        let j = 0;
        while (i < left.length && j < right.length) {
            arrSort.push((left[i] < right[j]) ? left[i++] : right[j++]);
        }
        return [
            ...arrSort,
            ...left.slice(i),
            ...right.slice(j)
        ]
    };

    const middle = Math.floor(arr.length / 2);
    const arrLeft: number[] = arr.slice(0, middle);
    const arrRight: number[] = arr.slice(middle);
    return mergeSort(merge(arrLeft), merge(arrRight));
};




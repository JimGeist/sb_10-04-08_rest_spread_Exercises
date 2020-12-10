function arraysAreTheSame(inArr1, inArr2) {

    // superfiscial compare of 2 arrays, not a deep compare.
    if (!(inArr1 === inArr2)) {
        // array references are different. continue testing

        if (inArr1.length === inArr2.length) {
            // arrays are the same length
            return inArr1.reduce((areSame, arr1Val, arr1Idx) =>
                (((arr1Val === inArr2[arr1Idx]) && areSame) ? true : false),
                true)
        } else {
            return false;
        }

    } else {
        return false;
    }

}

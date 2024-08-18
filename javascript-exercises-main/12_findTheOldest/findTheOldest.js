const findTheOldest = function(arr) {

    return arr.reduce((gr, cur) => {
        let mop;
        gr.yearOfDeath - gr.yearOfBirth > cur.yearOfDeath - cur.yearOfBirth ? mop = gr : mop = cur
        return mop
    })
};

// Do not edit below this line
module.exports = findTheOldest;

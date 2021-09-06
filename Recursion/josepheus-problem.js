/**
 * So basically the result from jos(n - 1, k) consider different position as compared to jos(n, k). The positions from jos(n -1, k) are transalated
 * to jos(n, k) as below, considering k - 1 was the one killed during jos(n, k) :
 *  0 becomes k
 *  1 becomes k + 1
 *  2 becomes k + 2
 *  .
 *  .
 *  .
 *  i becomes k + i
 * 
 *  So what ever solution comes from previous iteration, Add k to it. Also Since we have to bound the result so mod it by n
 *  And the resultant expression comes out to be : jos(n, k) => (jos(n - 1, k) + k) % n)
 */

const jos = function (n, k) {
    if (n == 1)
        return 0
    return (jos(n -1, k) + k) % n
}

console.log(jos(5, 3))

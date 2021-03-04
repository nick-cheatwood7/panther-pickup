
import userModelTests from './models/userModelTests.js'
import cartItemTests from './models/cartModelTests.js'
import cartModelTests from './models/cartModelTests.js'

async function runTestsAndReturnFailures(tests) {
  const testTotalCount = tests.length
  const testsFailed = []

  for (let i = 0; i < testTotalCount; i++) {
    const passedTest = await  tests[i].test()
    if (!passedTest) testsFailed.push(tests[i].name)
  }
  return testsFailed
}

async function init(tests) {
  const failedTestsResults = await runTestsAndReturnFailures(tests)
  if (failedTestsResults.length === 0) {
    console.log('\x1b[32m%s\x1b[0m', 'All Tests Passed!!')
  } else {
    console.log(`\x1b[31mFailed ${failedTestsResults.length} tests.\x1b[0m`)
    failedTestsResults.forEach((test) => {
      console.log(`\x1b[33m${test}\x1b[0m`)
    })
  }
}

const testsArray = [
  userModelTests,
  cartModelTests,
]

init(testsArray.flat())
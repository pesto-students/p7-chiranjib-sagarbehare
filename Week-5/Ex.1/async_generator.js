function* generator() {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Job 1")
      }, 1000);
    })

    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Job 2")
      }, 1000);
    })

    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Job 3")
      }, 1000);
    })
  }
  
  async function doTask() {
    let task = generator()
    try {
      let task1 = await task.next().value
      console.log(task1)
      let task2 = await task.next().value
      console.log(task2)
      let task3 = await task.next().value
      console.log(task3)
  
      return "Task Completed Successfully !!"
    
    } catch (e) {
      throw new Error(e)
    }
  }
  
  Promise.resolve(doTask()).then((v) => { console.log(v) }).catch((err) => { console.log(err) })
  
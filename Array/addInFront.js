function addPuppy(queue, puppyName) {
    queue.unshift(puppyName);
    return queue;  // Add puppyName at the beginning of queue and return updated queue
  }
console.log(addPuppy(["rahul","tejus"],"ojus"))  
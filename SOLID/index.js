// SINGLE RESPONSIBILITY and OPEN/CLOSED PRINCIPAL

function calculateSalary(employee) {
  let salary = employee.hoursWorked * employee.hourlyRate;

  // let generateReport=  "";  // any functionality
  // console.log(generateReport);

  generateReport(employee);
  sendPayment(salary, employee.email);
  // we are simply calling a function and can call more function if we want until it doesn't adheres the parent function, this is "OPEN/CLOSED principal"

  return salary;
}

function generateReport(employee) {
  let generateReport = "";  // any functionality
  console.log(generateReport);
}

function sendPayment(salary, employeeEmail) {
  // TODO: payment sending method
}



// LISKOV SUBSTITUTION PRINCIPAL
async function makeRequest(url, errorHandler) {
  await fetch(url)
    .then(resp => resp.json())
    .catch(error => errorHandler(error))
}

const consoleErrorHandler = (error) => {
  console.error(error);
}

const externalServiceError = (error) => {
  sendErrorToService(error);
}

makeRequest("dd", consoleErrorHandler);
makeRequest("dd", externalServiceError);
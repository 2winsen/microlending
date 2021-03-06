var HOST = "http://localhost";

// JETTY
//var PORT = "9080";

// TOMCAT
var PORT = "8080";

var BASE_PATH = "microlending/rest/";

var rootURL = HOST + ":" + PORT + "/" + BASE_PATH;

function getServerConstants(completeHandler) {
	console.log("getServerConstants");
	$.ajax({
		type: 'GET',
		url: rootURL + "getServerConstants",
		dataType: "json",
		success: function(data) {
			INTEREST = new BigDecimal(data.interest);
			MAX_LOAN_AMOUNT = parseFloat(data.maxLoanAmount);
			MIN_LOAN_AMOUNT = parseFloat(data.minLoanAmount);
			MAX_LOAN_TERM = parseInt(data.maxLoanTerm);
			MIN_LOAN_TERM = parseInt(data.minLoanTerm);
		},
		complete: completeHandler
	});
}

function takeLoan(loan, successHandler, errorHandler) {
	console.log("takeLoan");
	$.ajax({
		type: 'POST',
		url: rootURL,
		dataType: "json",
		contentType: "application/json",
		data: loan,
		success: successHandler,
		error: errorHandler
	});
}

function getAllLoans(successHandler, errorHandler) {
	console.log("getAllLoans");
	$.ajax({
		type: 'GET',
		url: rootURL,
		dataType: "json",
		success: successHandler,
		error: errorHandler
	});
}

function extendLoan(id, successHandler, errorHandler) {
	console.log("extendLoan");
	$.ajax({
		type: 'PUT',
		url: rootURL + id,
		dataType: "json",
		contentType: "application/json",
		success: successHandler,
		error: errorHandler
	});
}

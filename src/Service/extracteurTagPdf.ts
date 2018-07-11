import { PDFParser } from 'pdf2json';

export class ExtracteurTagPdfService {
	test(): void {
		let pdfParser = new PDFParser(this,1);
	 
	    pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
	    pdfParser.on("pdfParser_dataReady", pdfData => {
	    	let allText = pdfParser.getRawTextContent();

	    	// list of regex
	    	let adminRegex = /#ADMIN#(\w+)?#(\w+)?#(.*)?#/i;
	    	let usersRegex1 = /#(user\d+)#(.*)?#/gi;
	    	let usersRegex2 = /#(user\d+)#(.*)?#(.*)?#(.*)?#(.*)?#/i;
	    	let scheduleRegex = /#schedule#([0-9]{4}-[0-9]{2}-[0-9]{2})?#([0-9]{2}:[0-9]{2})?#(.*)?#(.*)?#/i;
	    	let retryRegex = /#retry#([0-9]*)#([0-9]*)#([0-9]*)#/i;

	    	let meetingRegex = /MEETING/i;
	    	let subjectRegex = /SUBJECT/i;

	    	// extract meeting infos
	    	let splitedText = allText.split("#");
	    	let meetingObject = {
	    		"sujet": null,
	    		"description": null
	    	};
	    	let lastTextMatch = false;
	    	let lastTextIsMeetingSujet = false;

	    	for (var ii = 0, cc = splitedText.length ; ii < cc; ii++) {
				if (lastTextIsMeetingSujet) {
	    			meetingObject.description = splitedText[ii];
	    			lastTextIsMeetingSujet = false;
	    			break;
	    		}

	    		if (lastTextMatch) {
	    			meetingObject.sujet = splitedText[ii];
	    			lastTextIsMeetingSujet = true;
	    			lastTextMatch = false;
	    		}

	    		if (meetingRegex.test(splitedText[ii])) {
	    			lastTextMatch = true;
	    		}
	    	}

	    	// extract email infos
	    	let emailObject = {
	    		"sujet": null,
	    		"message": null
	    	};
	    	lastTextMatch = false;
	    	let lastTextIsEmailSujet = false;

	    	for (var ii = 0, cc = splitedText.length ; ii < cc; ii++) {
				if (lastTextIsMeetingSujet) {
	    			emailObject.message = splitedText[ii];
	    			lastTextIsEmailSujet = false;
	    			break;
	    		}

	    		if (lastTextMatch) {
	    			emailObject.sujet = splitedText[ii];
	    			lastTextIsEmailSujet = true;
	    			lastTextMatch = false;
	    		}

	    		if (subjectRegex.test(splitedText[ii])) {
	    			lastTextMatch = true;
	    		}
	    	}

	    	// extract admin metadata
	    	let result1 = allText.match(adminRegex);

	    	let adminObject = {
	    		"nom": result1[1],
	    		"prenom": result1[2],
	    		"email": result1[3],
	    	};

	    	// extract schedule metadata
	    	let result4 = allText.match(scheduleRegex);

	    	let scheduleObject = {
	    		"date": result4[1],
	    		"heure": result4[2],
	    		"lieu": result4[3],
	    		"url": result4[4],
	    	};

	    	// extract retry metadata
	    	let result5 = allText.match(retryRegex);

	    	let retryObject = {
	    		"initialDelay": +result5[1],
	    		"nbRetry": +result5[2],
	    		"delay": +result5[3],
	    	};

	    	// extract users metadata
	    	let result2 = allText.match(usersRegex1);

	    	let userList = [];
	    	result2.forEach( userText => {
	    		let result3 = userText.match(usersRegex2);

	    		let userObject = {
		    		"user_id": result3[1],
		    		"nom": result3[2],
		    		"prenom": result3[3],
		    		"entreprise": result3[4],
		    		"email": result3[5],
	    		};

	    		userList.push(userObject);
	    	});

	    	console.log("========= INFO : ADMINISTRATEUR =========");
	    	console.log(adminObject);
	    	console.log("========= INFO : MEETING =========");
	    	console.log(meetingObject);
	    	console.log("========= INFO : EMAIL =========");
	    	console.log(emailObject);
	    	console.log("========= INFO : SCHEDULE =========");
	    	console.log(scheduleObject);
	    	console.log("========= INFO : RETRY =========");
	    	console.log(retryObject);
	    	console.log("========= INFO : USERS =========");
	    	console.log(userList);
	    });
	 
	    pdfParser.loadPDF("./pdfTEST.pdf");
	}
}

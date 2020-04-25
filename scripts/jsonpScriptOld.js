function displayPage(data) { // Run when JSON loads
    var newContent = ''; // Variable to hold HTML
   
      // For loop to loop through the data file
      for (var i = 0; i < data.pageData.length; i++) {

        // Textbook buying info, ISBN, etc.
        newContent += '<div>';
        newContent += '<img src="' + data.pageData[i].bookImgPath + '" ';
        newContent += 'alt="' + data.pageData[i].bookImgAlt + '" />';
        newContent += '<h2>' + data.pageData[i].sectionHeadBooks + '</h2>';

        newContent += '<ul><li>' + data.pageData[i].htmlandCsslistItem1 + '</li>';
        newContent += '<li>' + data.pageData[i].htmlandCsslistItem2 + '</li>';
        newContent += '<li>' + data.pageData[i].htmlandCsslistItem3 + '</li>';
        newContent += '<li>' + data.pageData[i].htmlandCsslistItem4 + '</li>';

        newContent += '<br>';

        newContent += '<li>' + data.pageData[i].jsjqlistItem5 + '</li>';
        newContent += '<li>' + data.pageData[i].jsjqlistItem6 + '</li>';
        newContent += '<li>' + data.pageData[i].jsjqlistItem7 + '</li>';
        newContent += '<li>' + data.pageData[i].jsjqlistItem8 + '</li>';
        newContent += '</ul>';

        // Book information
        newContent += '<h2>' + data.pageData[i].sectionHeadInfo + '</h2>';
        newContent += '<ul><li>' + data.pageData[i].infolistItem9 + '</li>';
        newContent += '<li>' + data.pageData[i].infolistItem10 + '</li>';
        newContent += '<li>' + data.pageData[i].infolistItem11 + '</li>';
        newContent += '<li>' + data.pageData[i].infolistItem12 + '</li></ul>';
        newContent += '<p><a class="btn btn-secondary" href= "https://www.amazon.com/Web-Design-HTML-JavaScript-jQuery/dp/1118907442/" target="_blank" role="button">' +
        data.pageData[i].linkButtonDesc + '</a></p>';
        newContent += '</div>';

        // Github info
        newContent += '<div>';
        newContent += '<img src="' + data.pageData[i].githubImgPath + '" ';
        newContent += 'alt="' + data.pageData[i].githubImgAlt + '" />';

        newContent += '<h2>' + data.pageData[i].sectionHeadResources + '</h2>';
        newContent += '<h3>' + data.pageData[i].githubHeading + '</h3>';

        newContent += '<ul><li>' + data.pageData[i].githubListItem1 + '</li>';
        newContent += '<li>' + data.pageData[i].githubListItem2 + '</li>';
        newContent += '<li>' + data.pageData[i].githubListItem3 + '</li>';
        newContent += '<li>' + data.pageData[i].githubListItem4 + '</li>';
        newContent += '</ul>';
        newContent += '<p><a class="btn btn-secondary" href= "https://github.com/" target="_blank" role="button">' +
        data.pageData[i].githubLinkDesc + '</a></p>';

        // Device info
        newContent += '<img src="' + data.pageData[i].pcImgPath + '" ';
        newContent += 'alt="' + data.pageData[i].pcImgAlt + '" />';

        newContent += '<h3>' + data.pageData[i].sectionDevices + '</h3>';

        newContent += '<ul><li>' + data.pageData[i].deviceListItem1 + '</li>';
        newContent += '<li>' + data.pageData[i].deviceListItem2 + '</li>';
        newContent += '<li>' + data.pageData[i].deviceListItem3 + '</li>';
        newContent += '</ul>';
        newContent += '</div>';

        // Reccomended Resources

        newContent += '<div>';
        newContent += '<img src="' + data.pageData[i].flashdriveImgPath + '" ';
        newContent += 'alt="' + data.pageData[i].flashdriveImgAlt + '" />';
        newContent += '<h2>' + data.pageData[i].sectionReccomended + '</h2>';
        newContent += '<ul><li>' + data.pageData[i].reccoListItem1 + '</li>';
        newContent += '<li>' + data.pageData[i].reccoListItem2 + '</li>';
        newContent += '</ul>';
        newContent += '<p><a class="btn btn-secondary" href= "https://www.google.com/drive/" target="_blank" role="button">' +
        data.pageData[i].googleDriveLinkDesc + '</a></p>';
        newContent += '</div>';


      }
  
      // Update the page with the new content
      document.getElementById('content').innerHTML = newContent;
  }
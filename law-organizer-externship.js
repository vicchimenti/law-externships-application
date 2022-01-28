/***
 *      @author Victor Chimenti, MSCS
 *      @file law-organizer-externship.js
 *      @see Seattle University School of Law Externship Database
 *      law/organizer/externship
 *      ID: 5304
 *
 *      This content layout will be sorted by the organizer and will link to the
 *      full text layout to reveal the full externship profile.
 *
 *      Document will write once when the page loads
 *
 *      @version 7.5
 */



/***
 *      Import T4 Utilities
 */
//  importClass(com.terminalfour.media.IMediaManager);
//  importClass(com.terminalfour.spring.ApplicationContextProvider);
//  importClass(com.terminalfour.publish.utils.BrokerUtils);
//  importClass(com.terminalfour.media.utils.ImageInfo);
 
 
 
 
 /***
  *      Extract values from T4 element tags
  *      and confirm valid existing content item field and trim strings
  */
 function getContentValues(tag) {
 
     try {
 
         let _tag = BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, tag).trim()
 
         return {
             isError: false,
             content: _tag == '' ? null : _tag
         }
 
     } catch (error) {
 
         return {
             isError: true,
             message: error.message
         }
     }
 }
 
 
 
 
 /***
  *      Write the document
  */
 function writeDocument(array) {
 
     for (let i = 0; i < array.length; i++) {
 
         document.write(array[i]);
     }
 }
 




try {


    /***
     *      Dictionary of content
     * */
    let externDict = {

        externshipName: getContentValues('<t4 type="content" name="Name" output="normal" modifiers="striptags,htmlentities" />'),
        externshipId: getContentValues('<t4 type="content" name="Externship ID" output="normal" modifiers="striptags,htmlentities" />'),
        agency: getContentValues('<t4 type="content" name="Agency" output="normal" modifiers="striptags,htmlentities" />'),
        subject: getContentValues('<t4 type="content" name="Subject" output="normal" modifiers="striptags,htmlentities" />'),
        location: getContentValues('<t4 type="content" name="Location" output="normal" modifiers="striptags,htmlentities" />'),
        jurisdiction: getContentValues('<t4 type="content" name="Jurisdiction" output="normal" modifiers="striptags,htmlentities" />'),
        externshipType: getContentValues('<t4 type="content" name="Type" output="normal" modifiers="striptags,htmlentities" />'),
        region: getContentValues('<t4 type="content" name="Region" output="normal" modifiers="striptags,htmlentities" />'),
        description: getContentValues('<t4 type="content" name="Externship Description" output="normal" modifiers="medialibrary,nav_sections" />'),
        fullTextLink: getContentValues('<t4 type="content" name="Agency" output="fulltext" use-element="true" filename-element="Agency" modifiers="striptags,htmlentities" />'),
        lastModifiedDate: getContentValues('<t4 type="meta" meta="last_modified" format="EEEE, MMMM d, yyyy" />'),
        publishDate = getContentValues('<t4 type="meta" meta="publish_date" format="EEEE, MMMM d, yyyy" />'),
        contentId: getContentValues('<t4 type="meta" meta="content_id" />')

    };





    /***
     *  Declare/Assign local variables with base formatting
     * 
     * */
    let titleLink = '<h3 class="card-title visually-hidden hidden">No Title Provided</h3>';
    let openCardBody = '<div class="card-body px-3">';
    let closeCardBody = '</div>';
    let openHiddenFields = '<div class="visually-hidden hidden">';
    let closeHiddenFields = '</div>';
    let beginningHTML = '<article class="externshipWrapper col card border-0 w-100 my-2 shadow-sm" id="externship' + externDict.contentId.content + '" aria-label="' + externDict.externshipName.content + '">';
    let endingHTML = '</article>';
    // let subjectString = externDict.subject.content || null;
    // let locationString = externDict.location.content || null;



    /***
     *  validate agency field and set fulltext link
     * 
     * */
    if (agency) {
        titleLink = '<h3 class="card-title agency px-3"><a href="' + externDict.fullTextLink.content + '" class="card-link" target="_blank" title="View full ' + externDict.agency.content + ' profile">' + externDict.agency.content + '</a></h3>';
    } else {
        beginningHTML = '<article class="externshipWrapper col card border-0 w-100 my-2 shadow-sm visually-hidden" id="externship' + externDict.contentId.content + '" aria-label="' + externDict.externshipName.content + '">';
        titleLink = '<h3 class="card-title agency px-3 visually-hidden">' + externDict.externshipName.content + '</h3>';
        openCardBody = '<div class="card-body mb-4 px-3">';
    }




    /***
     *  confirm location and subject fields
     * 
     * */
    // let subtitle = ({
    //     (externDict.subject.content) , (externDict.location.content)
    // }) => (
    //     (!externDict.subject.content)
    //         ? '<p class="card-subtitle visually-hidden hidden subject location">No valid Location or Subject provided</p>'
    //         : (externDict.location.content)
    //         ? '<h4 class="card-subtitle mb-2 text-muted location">' + externDict.location.content + '</h4>'
    //         : '<h4 class="card-subtitle mb-2 text-muted subject location">' + externDict.subject.content + ' | ' + externDict.location.content + '</h4>'
    // );
    // let subtitleString = subtitle.toString();




    /***
     *  confirm type
     * 
     * */
    let typeString =    (externDict.externshipType.content)
                        ? '<p class="card-text externshipType">' + externDict.externshipType.content + '</p>'
                        : '<span class="visually-hidden hidden externshipType">No Type Provided</span>';




    /***
     *  confirm jurisdiction
     * 
     * */
    let hiddenJurisdiction =    (externDict.jurisdiction.content) 
                                ? '<span class="visually-hidden hidden jurisdiction">' + externDict.jurisdiction.content + '</span>'
                                : '<span class="visually-hidden hidden jurisdiction">No Jurisdiction Provided</span>';




    /***
     *  confirm region
     * 
     * */
    let hiddenRegion =  (externDict.region.content)
                        ? '<span class="visually-hidden hidden region">' + externDict.region.content + '</span>'
                        : '<span class="visually-hidden hidden region">No Region Provided</span>';




    /***
     *  confirm description
     * 
     * */
    let hiddenDescription = (externDict.description.content)
                            ? '<div class="visually-hidden hidden description">' + externDict.description.content + '</div>'
                            : '<div class="visually-hidden hidden description">No Description Provided</div>';






    /***
     *  write document once
     * 
     * */
     writeDocument(
        [
            beginningHTML,
            openCardBody,
            titleLink,
            // subtitle,
            typeString,
            openHiddenFields,
            hiddenJurisdiction,
            hiddenRegion,
            hiddenDescription,
            closeHiddenFields,
            closeCardBody,
            endingHTML
        ]
    );






} catch (err) {
    document.write(err.message);
}
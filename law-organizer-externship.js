/***
 *  law/organizer/externship
 * 
 *  switcher file to parse out inactive or invalid items
 */




/***
 *      Import T4 Utilities
 */
 importClass(com.terminalfour.publish.utils.BrokerUtils);




 /***
  *  declare and assign topic layout
  * 
  */
 let contentTypeLayout = 'output/externship'; //edit this to change the Content Layout to use for output
 let activeState = "1"; //edit this to change the option
 
 
 
 
 /***
  *      Extract values from T4 element tags
  *      and confirm valid existing content item field
  */
 function getContentValues(tag) {
     try {
         let _tag = BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, tag).trim();
         return {
             isError: false,
             content: _tag == '' ? null : _tag
         };
     } catch (error) {
         return {
             isError: true,
             message: error.message
         };
     }
 }
 
 
 
 
 /***
  *  Main
  * 
  */
 try {
 
 
     /***
      *      Dictionary of content
      * */
     let xmlExternDict = {
 
         activeStatus: getContentValues('<t4 type="content" name="Active Status" output="normal" modifiers="striptags,htmlentities" />'),
         agency: getContentValues('<t4 type="content" name="Agency" output="normal" modifiers="striptags,htmlentities" />')
 
     };
 
     
 
 
     /***
      *  parse status field
      * */
     let statusState = xmlExternDict.activeStatus.content || "0";
 
 
 
 
     /***
      *  Validate each externship
      * */
     if (xmlExternDict.agency.content && statusState == activeState) {
 
         var sw = new java.io.StringWriter();
         var t4w = new com.terminalfour.utils.T4StreamWriter(sw);
         new com.terminalfour.publish.ContentPublisher().write(t4w, dbStatement, publishCache, section, content, contentTypeLayout, isPreview);
         output = sw.toString();
 
         document.write(output);
     }
 
 
 } catch (err) {
     document.write(err.message);
 }
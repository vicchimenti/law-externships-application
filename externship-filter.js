<script>
/***
*   @author Victor Chimenti, MSCS-SE '20
*   @file externship-filter.js
*
*   jQuery
*   This script searches the Externship Database content items for matches to the
*   user selected search parameters in the filter field dropdown menus
*
*   This custom system replaces the depreciated jQuery Quicksearch
*
*   @version 4.5
*/






$(function () {
    // After the DOM is ready, Wait until the window loads
    $(window).load(function () {
        // Once window loads set a timeout delay
        setTimeout(function () {




            //** global array holds list of content items that will render after filter selection **//
            var visibleItems = [];
            var parseItems = {};



            
            //   ***   Process and Parse Visible Items   ***   //
            $(function () {
                let parseItemsToDisplay = function() {
                    // assign array of currently visible content items
                    visibleItems = $('.externshipWrapper').not('.hideByText, .hideByAgency, .hideByType, .hideBySubject, .hideByJurisdiction, .hideByRegion');
                    // check to see if array is empty
                    if (visibleItems.length == 0) {
                        // when array is empty show the results message
                        $('.noResultsToShow').removeClass('hideResultsMessage');
                    } else {
                        // when array has content items suppress the results message
                        $('.noResultsToShow').addClass('hideResultsMessage');
                    }
                };
                parseItems.process = parseItemsToDisplay;
            });
            
            
            
            
            //   ***   Keyword Search   ***   //
            $(function () {
                // scan the keyword each character the user inputs
                $('#id_search').on('keyup', function () {
                    // Assign Search Key
                    let keyword = $(this).val().toLowerCase();
                    // filter the items for the input key
                    $(function () {
                        $('.externshipWrapper').filter(function () {
                            // when the search key is not present in the item then hide the item
                            $(this).toggleClass('hideByText', !($(this).text().toLowerCase().indexOf(keyword) > -1));
                        });
                    });
                    // parse out unselected content items and limit display to user selected items
                    parseItems.process();
                });
            });




            //   ***   Agency Filter   ***   //
            $(function () {
                // When the Dropdown Menu Selector Agency Changes - Execute change function
                $('#SelectBox-ByAgency').change(function () {
                    // Assign Search Key
                    let typeKey = $(this).val();
                    // If Search Key is Not Null then Compare to the Agency Items in Each Content Item
                    if (typeKey) {
                        // search tags in each item
                        $('.agency').filter(function (i, e) {
                            var typeValue = $(this).text();
                            // Check to see if the Key and Value are a Match
                            if (typeValue.match(typeKey)) {
                                $(this).parents('.externshipWrapper').removeClass('hideByAgency');
                            } else {
                                $(this).parents('.externshipWrapper').addClass('hideByAgency');
                            }
                        });
                        // Else the Search Key is Null so Reset all Content Items to Visible
                    } else {
                        $('.externshipWrapper').removeClass('hideByAgency');
                    }
                    // parse out unselected content items and limit display to user selected items
                    parseItems.process();
                });
            });




            //   ***   Subject Filter   ***   //
            $(function () {
                $('#SelectBox-BySubject').change(function () {
                    let typeKey = $(this).val();
                    if (typeKey) {
                        $('.subject').filter(function (i, e) {
                            var typeValue = $(this).text();
                            if (typeValue.match(typeKey)) {
                                $(this).parents('.externshipWrapper').removeClass('hideBySubject');
                            } else {
                                $(this).parents('.externshipWrapper').addClass('hideBySubject');
                            }
                        });
                    } else {
                        $('.externshipWrapper').removeClass('hideBySubject');
                    }
                    parseItems.process();
                });
            });




            //   ***   Location Filter   ***   //
            $(function () {
                $('#SelectBox-ByRegion').change(function () {
                    let typeKey = $(this).val();
                    if (typeKey) {
                        $('.location').filter(function (i, e) {
                            var typeValue = $(this).text();
                            if (typeValue.match(typeKey)) {
                                $(this).parents('.externshipWrapper').removeClass('hideByRegion');
                            } else {
                                $(this).parents('.externshipWrapper').addClass('hideByRegion');
                            }
                        });
                    } else {
                        $('.externshipWrapper').removeClass('hideByRegion');
                    }
                    parseItems.process();
                });
            });
            




        }, 10);
    });
});
</script>
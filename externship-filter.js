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
*   @version 4.2
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
                    visibleItems = $('.externshipWrapper').not('.visually-hidden');
                    // check to see if array is empty
                    if (visibleItems.length == 0) {
                        // when array is empty show the results message
                        $('.noResultsToShow').removeClass('visually-hidden');
                    } else {
                        // when array has content items suppress the results message
                        $('.noResultsToShow').addClass('visually-hidden');
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
                            $(this).toggleClass('visually-hidden', !($(this).text().toLowerCase().indexOf(keyword) > -1));
                        });
                    });
                    // parse out unselected content items and limit display to user selected items
                    parseItems.process();
                });
            });




            //   ***   Agency Filter   ***   //
            $(function () {
                // When the Dropdown Menu Selector Course Types Change - Execute change function
                $('#SelectBox-ByAgency').change(function () {
                    // Assign Search Key
                    let typeKey = $(this).val();
                    // If Search Key is Not Null then Compare to the Type List Items in Each Content Item
                    if (typeKey) {
                        // search tags in each item
                        $('agency').filter(function (i, e) {
                            var typeValue = $(this).text();
                            // Check to see if the Key and Value are a Match
                            if (typeValue.match(typeKey)) {
                                $(this).parents('.externshipWrapper').removeClass('visually-hidden');
                            } else {
                                $(this).parents('.externshipWrapper').addClass('visually-hidden');
                            }
                        });
                        // Else the Search Key is Null so Reset all Content Items to Visible
                    } else {
                        $('.externshipWrapper').removeClass('visually-hidden');
                    }
                    // parse out unselected content items and limit display to user selected items
                    parseItems.process();
                });
            });




        }, 10);
    });
});
</script>
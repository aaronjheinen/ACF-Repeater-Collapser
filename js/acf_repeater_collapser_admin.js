jQuery(document).ready(function($) {

	// toggle the class that collapses the repeater
	// toggle appropriate button text
	function acf_repeater_toggle( event ) {
	    // Toggle Fields
	    $(this).parent().toggleClass('collapsed-repeater');
	    
	    // Nice Button Text
	    if( $(this).text() == 'Collapse All Fields' ) {
	    	$(this).text('Expand All Fields');
	    } else {
	    	$(this).text('Collapse All Fields');
	    }
	}

	// HTML to put above each repeater instance
	$collapseAllButton = '<button type="button" role="button" class="button field-repeater-toggle">Collapse All Fields</button>';

	// find each repeater instance, add the button if the field uses the row layout
	$('.field_type-repeater, .field_type-flexible_content').each( function() {
		$repeater = $(this);
		if( $( '.acf-input-table', $repeater ).hasClass('row_layout') ) {
			if( $repeater.is( 'tr' ) ) {
				$repeater.children( 'td:last-child' ).children( '.inner' ).prepend( $collapseAllButton );
			} else {
				$repeater.prepend( $collapseAllButton );
			}
		}
	});

	// bind the click event to the toggle function
	// delegated to higher DOM element to handle dynamically added repeaters
	// "div" makes sure event is only bound once
	$( 'div.field_type-repeater, div.field_type-flexible_content' ).on(
		'click',
		'.field-repeater-toggle',
		acf_repeater_toggle
	);

});

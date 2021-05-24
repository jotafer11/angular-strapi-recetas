/*$(function() {
	alert("script agregado correctamente");
});
*/

        $(document).on('change', '#select-categoria', function(event) {
    
        $('#searchString').val($("#select-categoria option:selected").text());
});
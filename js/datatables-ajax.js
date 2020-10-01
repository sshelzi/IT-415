$(document).ready(function() {
    $('#example').DataTable({
        ajax: 'ajax/gas-stations.txt',
        columns: [
            {
				data: 'name'
			},
			{
                className: 'logo'
                data: 'logo'
                render: function(data, type) {
                    if (type === 'display') {
                        var logo = '';
 
                        switch (data) {
                            case 'CITGO':
                                logo = 'CITGO';
                                break;
                            case 'Irving':
                                logo = 'Irving';
                                break;
                            case 'Mobil':
                                logo = 'Mobil';
                                break;
                            case 'Cumberland Farms':
                                logo = 'Cumberland Farms';
                                break;
                            case 'Sunoco':
                                logo = 'Sunoco';
                                break;
							case 'Sams Club':
                                logo = 'Sams Club';
                                break;
							case 'BJs':
                                logo = 'BJs';
                                break;
							case 'Shell':
                                logo = 'Shell';
                                break;
							case 'Gulf':
                                logo = 'Gulf';
                                break;
                        }
 
                        return '<span class="logo ' + logo + '"></span> ' + data;
						//return '<img src="" />' + data;
			
                    }
 
                    return data;
                }
            },
            {
                data: 'position'
            },
            {
                className: 'f32', // used by world-flags-sprite library
                data: 'office',
                render: function(data, type) {
                    if (type === 'display') {
                        var country = '';
 
                        switch (data) {
                            case 'Argentina':
                                country = 'ar';
                                break;
                            case 'Edinburgh':
                                country = '_Scotland';
                                break;
                            case 'London':
                                country = '_England';
                                break;
                            case 'New York':
                            case 'San Francisco':
                                country = 'us';
                                break;
                            case 'Sydney':
                                country = 'au';
                                break;
                            case 'Tokyo':
                                country = 'jp';
                                break;
                        }
 
                        return '<span class="flag ' + country + '"></span> ' + data;
                    }
 
                    return data;
                }
            },
            {
                data: 'extn',
                render: function(data, type, row, meta) {
                    return type === 'display' ?
                        '<progress value="' + data + '" max="9999"></progress>' :
                        data;
                }
            },
            {
                data: "start_date"
            },
            {
                data: "salary",
                render: $.fn.dataTable.render.number( ',', '.', 2, '$' )
            }
        ]
    });
});





//show elips  for long strings
//$('#example').dataTable( {
//  "columnDefs": [ {
//    "targets": 4,
//    "data": "description",
//    "render": function ( data, type, row, meta ) {
//      return type === 'display' && data.length > 40 ?
//        '<span title="'+data+'">'+data.substr( 0, 38 )+'...</span>' :
//        data;
//    }
//  } ]
//} );

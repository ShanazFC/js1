> var foo = new Date
undefined
> foo
Wed Mar 09 2016 20:47:03 GMT-0500 (EST)
> foo.getMonth
[Function: getMonth]
> foo.getMonth()
2
> var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
undefined
> months
[ 'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December' ]
> months[2]
'March'
> var month = foo.getMonth()
undefined
> month
2
> months
[ 'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December' ]
> months[month]
'March'
> months[foo.getMonth]
undefined
> months[foo.getMonth()]
'March'
> console.log("Today's date is ")
Today's date is
undefined
> console.log("Today's date is " + months[foo.getMonth()])
Today's date is March
undefined
>
>
>
>
>
> console.log("Today's date is " + months[foo.getMonth()])
Today's date is March
undefined
> console.log("Today's date is " + months[foo.getMonth()] + foo.getDate()])
... )
... ]
...
> months
[ 'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December' ]
> console.log("Today's date is " + months[foo.getMonth()] + foo.getDate())
Today's date is March9
undefined
> console.log("Today's date is " + months[foo.getMonth()] + " " + foo.getDate())
Today's date is March 9
undefined
> console.log("Today's date is " + months[foo.getMonth()] + " " + foo.getDate() + "th")
Today's date is March 9th
undefined
>

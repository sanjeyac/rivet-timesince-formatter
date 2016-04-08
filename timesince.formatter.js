/**
* Rivet TimeSince formatter
*
* Author: Sanjeya Cooray
*
* License: GPL v2 - The project is as is.
*
* It transforms a javascript date to a string like "6 minutes ago","2 days ago", etc
*
*  This is the porting of my angular-timesince-filter to rivetjs
*/

rivets.formatters.timesince = function(value, selectedLang){

    //add your language here
    var langs = {
        en: {
            years: " years ago",
            months: " months ago",
            days: " days ago",
            hours: " hours ago",
            minutes: " minutes ago",
            seconds: " seconds ago",
            now: "now",
            nodate: "No date"
        },
        it: {
            years: " anni fa",
            months: " mesi da",
            days: " giorni fa",
            hours: " ore fa",
            minutes: " minuti fa",
            seconds: " secondi fa",
            now: "adesso",
            nodate: "Nessuna data"
        }
    };

    //function parameters check
    if ( selectedLang == null || langs[selectedLang] == null )
        selectedLang = 'en'; //default language is english

    var lang = langs[selectedLang];

    if ( value == null )
        return lang.nodate;

    return timeSince(value, lang); //return this parsing funciton



    /** time since implementation */
    function timeSince(date, lang) {

        var seconds = Math.floor((new Date() - date) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval >= 1) {
            return interval + lang.years;
        }
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            return interval + lang.months;
        }
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
            return interval + lang.days;
        }
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
            return interval + lang.hours;
        }
        interval = Math.floor(seconds / 60);
        if (interval >= 1) {
            return interval + lang.minutes;
        }

        if ( Math.floor(seconds) == 0 ){
            return lang.now;
        }else
            return Math.floor(seconds) + lang.seconds;
    }
};

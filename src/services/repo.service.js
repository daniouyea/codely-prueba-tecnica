import { parse } from 'csv-parse/sync';
import { readFileSync } from 'fs';
import { URL } from 'url';

const pathRepo = new URL(`../../${process.env.PATH_REPO_CSV}`, import.meta.url).pathname;

const repoService = {
    readCSV() {
        const data = readFileSync(pathRepo, 'utf8');
        const records = parse(data, {
            delimiter: ',',
            columns: true,
        });
        return records;
    },

    /**
     * @param {Object} filter
     * @param {string} filter.language - language of the repos
     * @param {string} filter.num - limit repos to number
     * @returns {Object[]}
     * @example
     * const repos = repoService.getRepos({ language: 'javascript', num: 5 });
     */
    query(filter) {
        let records =  this.readCSV();
        if (filter.language) {
            records = records.filter((record) => record.language === filter.language);
        }
        if (filter.num) {
            records = records.slice(0, filter.num);
        }
        return records;
    }
}

export default repoService
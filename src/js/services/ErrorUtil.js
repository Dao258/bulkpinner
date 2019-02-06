/* Bulk Pinner - Create multiple pins in your Pinterest boards at once
 * Copyright (C) 2017 Luke Denton
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class ErrorUtil
 *
 * Interface for abstracting the error reporting service
 */
export default class ErrorUtil {

    /**
     * Log an error to the bug tracking system
     *
     * @param {Error}  error   A description of the error
     * @param {Object} options Extra details of the error
     *
     * @returns {null}
     */
    static Log(error, options) {
        bugsnagClient.metaData = options;
        bugsnagClient.notify(error);
    }

}

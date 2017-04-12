using System;

namespace Disa.Framework.Steam
{
    /// <summary>
    /// Localization for Disa.Framework.Steam.
    /// </summary>
    public static class Locale
    {

        /// <summary>
        /// Get a localized string.
        /// </summary>
        /// <param name="key">The key of the string.</param>
        /// <returns>The localized string.</returns>
        public static string String(string key)
        {
            return "{{" + key + "}}";
        }

    }
}
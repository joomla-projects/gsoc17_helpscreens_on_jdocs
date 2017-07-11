<?php
/**
 * @package     Joomla.Plugin
 * @subpackage  System.Tourguide
 *
 * @copyright   Copyright (C) 2005 - 2017 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */
defined('_JEXEC') or die;

use Joomla\Registry\Registry;

/**
 * PlgSystemTour
 *
 * @since  __DEPLOY_VERSION__
 */
class PlgSystemTour extends JPlugin
{
	/**
     * Listener for the `onBeforeRender` event
     *
     * @return  void
     *
     * @since   __DEPLOY_VERSION__
     */
	public function onBeforeRender()
	{
		// Get the application object
		$app = JFactory::getApplication();
	
		// Run in backend
		if ($app->isClient('administrator'))
		{
			// Get the input object
			$input = $app->input;

			// Get an instance of the Toolbar
			$toolbar = JToolbar::getInstance('toolbar');
		}
	}

	/**
     * Listener for the `onBeforeCompileHead` event
     *
     * @return  void
     *
     * @since   __DEPLOY_VERSION__
     */
	public function onBeforeCompileHead()
	{
		// Only going to run these in the backend for now
		if (JFactory::getApplication()->isClient('administrator'))
		{
			// Hopscotch Tour File
			JHtml::_(
				'script', JUri::root()
				. 'media/plg_system_tour/js/hopscotch.min.js',
				array('version' => 'auto', 'relative' => true)
			);

			JHtml::_(
				'stylesheet', JUri::root()
				. 'media/plg_system_tour/css/hopscotch.min.css',
				array('version' => 'auto', 'relative' => true)
			);
			$lang = JFactory::getLanguage()->getTag();
			$document = JFactory::getDocument();
			$jinput = JFactory::getApplication()->input;
			$document->addScriptDeclaration("var urlOption = '" . $jinput->get('option') . "' ;");
			$document->addScriptDeclaration("var urlView = '" . $jinput->get('view') . "' ;");
			$document->addScriptDeclaration("var urlLayout = '" . $jinput->get('layout') . "' ;");
			$document->addScriptDeclaration("var langtag = '" . $lang = JFactory::getLanguage()->getTag() . "' ;");
			JHtml::_(
					'script', JUri::root()
					. 'media/plg_system_tour/js/guide.js',
					array('version' => 'auto', 'relative' => true)
			);
		}
	}
}

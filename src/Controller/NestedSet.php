<?php

namespace TreeView\Controller;

use TreeView\ViewModel\NestedSetCatalogViewModel;
use TreeView\ViewModel\NestedSetRhizomeSetViewModel;

class NestedSet implements Structure
{
    /**
     * 数据
     * @var array
     */
    private $list;

    /**
     * 路由
     * @var string
     */
    private $router;

    /**
     * @param array $list
     * @return $this
     */
    public function setList(array $list): self
    {
        $this->list = $list;
        return $this;
    }

    /**
     * @param string $router
     * @return $this
     */
    public function setRouter(string $router): self
    {
        $this->router = $router;
        return $this;
    }

    /**
     * @param array $column
     * @return mixed|string
     */
    public function buildCatalog(array $column = ['name'])
    {
        $css = file_get_contents(__DIR__ . '/../Static/dendrogram.css');
        $js = file_get_contents(__DIR__ . '/../Static/dendrogram.js');
        $js = sprintf($js, $this->router);

        $html = (new NestedSetCatalogViewModel($column))->index($this->list);
        $view = <<<EOF
<style>%s</style>
<script>%s</script>
%s
<div id="mongolia"></div>
<script>dendrogram.tree.init();</script>
EOF;
        return sprintf($view, $css, $js, $html);
    }

    /**
     * @param array $column
     * @return mixed|string
     */
    public function buildRhizome(array $column = ['name'])
    {
        $css = file_get_contents(__DIR__ . '/../Static/dendrogram.css');
        $js = file_get_contents(__DIR__ . '/../Static/dendrogram.js');
        $js = sprintf($js, $this->router);

        $html = (new NestedSetRhizomeSetViewModel($column))->index($this->list);
        $view = <<<EOF
<style>%s</style>
<script>%s</script>
<div class="dendrogram dendrogram-rhizome dendrogram-animation-fade">
%s
<div class="clear_both"></div>
</div>
<div id="mongolia"></div>
<script>dendrogram.tree.init();</script>
EOF;
        return sprintf($view, $css, $js, $html);
    }

    /**
     * @inheritDoc
     */
    public function buildSelect($id, $label, $value, array $default = [])
    {
        // TODO: Implement buildSelect() method.
    }

    /**
     * @inheritDoc
     */
    public function getTreeData($id)
    {
        // TODO: Implement getTreeData() method.
    }

    /**
     * @inheritDoc
     */
    public function operateNode($action, $data)
    {
        // TODO: Implement operateNode() method.
    }
}
